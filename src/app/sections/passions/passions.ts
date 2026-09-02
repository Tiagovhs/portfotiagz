import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { MascotComponent } from '../../mascot/mascot';

interface VinylEntry {
  artist: string;
  title: string;
  format: string;
  date: string;
}

export interface Cover {
  title: string;
  imageUrl: string | null;
  color: string;
}

const SERIES: { display: string; search: string }[] = [
  { display: 'Slam Dunk',              search: 'Slam Dunk' },
  { display: 'Kingdom',                search: 'Kingdom' },
  { display: 'Solo Leveling',          search: 'Solo Leveling' },
  { display: 'Fire Force',             search: 'Fire Force' },
  { display: 'Baki: The Grappler',     search: 'Baki the Grappler' },
  { display: 'Frieren',                search: 'Frieren: Beyond Journey\'s End' },
  { display: 'Demon Slayer',           search: 'Demon Slayer: Kimetsu no Yaiba' },
  { display: 'Fullmetal Alchemist',    search: 'Fullmetal Alchemist' },
  { display: 'Jujutsu Kaisen',         search: 'Jujutsu Kaisen' },
  { display: 'Death Note',             search: 'Death Note' },
  { display: '20th Century Boys',      search: '20th Century Boys' },
  { display: '21st Century Boys',      search: '21st Century Boys' },
  { display: 'The Promised Neverland', search: 'The Promised Neverland' },
  { display: 'Haikyu!!',              search: 'Haikyuu!!' },
  { display: 'JoJolion',              search: 'JoJolion' },
  { display: 'Riku-do',               search: 'Riku-do' },
  { display: "L'Attaque des Titans",  search: 'Attack on Titan' },
  { display: 'My Hero Academia',      search: 'My Hero Academia' },
  { display: 'Platinum End',          search: 'Platinum End' },
  { display: 'Steel Ball Run',        search: 'Steel Ball Run' },
  { display: 'Seven Deadly Sins',     search: 'The Seven Deadly Sins' },
  { display: 'Phantom Blood',         search: 'Phantom Blood' },
  { display: 'One Piece',             search: 'One Piece' },
  { display: 'Reborn!',              search: 'Katekyo Hitman Reborn!' },
  { display: 'Dorohedoro',           search: 'Dorohedoro' },
  { display: 'Vinland Saga',         search: 'Vinland Saga' },
  { display: 'Fairy Tail',           search: 'Fairy Tail' },
  { display: 'Monster',              search: 'Monster' },
  { display: 'Eyeshield 21',         search: 'Eyeshield 21' },
  { display: 'Sun-Ken Rock',         search: 'Sun-Ken Rock' },
  { display: 'Bleach',               search: 'Bleach' },
  { display: 'D.Gray-man',          search: 'D.Gray-man' },
  { display: 'Claymore',            search: 'Claymore' },
  { display: 'Berserk',             search: 'Berserk' },
  { display: 'Naruto',              search: 'Naruto' },
  { display: 'Vagabond',            search: 'Vagabond' },
  { display: 'Dragon Ball',         search: 'Dragon Ball' },
  { display: 'Deep 3',              search: 'Deep 3' },
  { display: 'Valhallian',          search: 'Valhallian the Black Iron' },
  { display: 'Ascension',           search: 'Ascension' },
];

const PALETTE = ['#97722f', '#6b511f', '#2c2718', '#b23a2c'];
const MAX_COVERS = 12;

const VINYL_RECENT: VinylEntry[] = [
  { artist: 'Josman', title: '000$', format: 'LP', date: '25.05.26' },
  { artist: 'Josman', title: 'J.O.$', format: '2×LP', date: '25.05.26' },
  { artist: 'Josman', title: 'Dom Perignon Crying', format: '2×LP', date: '25.05.26' },
  { artist: 'Nujabes, Force Of Nature & Fat Jon', title: 'Samurai Champloo Music Record – Impression', format: '2×LP', date: '25.05.26' },
  { artist: 'Anri', title: 'Timely!!', format: 'LP', date: '25.05.26' },
];

@Component({
  selector: 'app-passions',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './passions.html',
  styleUrl: './passions.css',
})
export class PassionsComponent implements OnInit, OnDestroy {
  vinylRecent = VINYL_RECENT;
  covers = signal<Cover[]>([]);
  loading = signal(false);

  private allCovers: Cover[] = [];
  private resizeObserver?: ResizeObserver;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.drawCovers();

    // Re-slice on container resize — no new API call
    const el = document.querySelector('.pas-covers');
    if (el) {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.allCovers.length) this.updateVisible(el.clientWidth);
      });
      this.resizeObserver.observe(el);
    }
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  async drawCovers() {
    if (this.loading()) return;

    const pool = [...SERIES];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const picks = pool.slice(0, MAX_COVERS);

    this.allCovers = picks.map((s, i) => ({ title: s.display, imageUrl: null, color: PALETTE[i % PALETTE.length] }));
    this.covers.set([...this.allCovers]);
    this.loading.set(true);

    try {
      const urls = await this.fetchCovers(picks.map(s => s.search));
      this.allCovers = picks.map((s, i) => ({
        title: s.display,
        imageUrl: urls[i] ?? null,
        color: PALETTE[i % PALETTE.length],
      }));
      const el = document.querySelector('.pas-covers');
      this.updateVisible(el?.clientWidth ?? window.innerWidth);
    } catch (err) {
      console.error('[Passions] AniList fetch failed:', err);
    } finally {
      this.loading.set(false);
    }
  }

  // 2 rows of covers — card = 88px, gap = 10px → 98px per slot
  private updateVisible(containerWidth: number) {
    const perRow = Math.max(1, Math.floor((containerWidth + 10) / 98));
    this.covers.set(this.allCovers.slice(0, Math.min(perRow * 2, MAX_COVERS)));
  }

  private async fetchCovers(searches: string[]): Promise<(string | null)[]> {
    const fields = searches
      .map((s, i) => `m${i}: Media(search: ${JSON.stringify(s)}, type: MANGA) { coverImage { large } }`)
      .join('\n');

    const res = await firstValueFrom(
      this.http.post<{ data: Record<string, { coverImage: { large: string } } | null> }>(
        'https://graphql.anilist.co',
        { query: `{ ${fields} }` },
        { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
      )
    );

    console.log('[Passions] AniList response:', res);
    return searches.map((_, i) => res.data?.[`m${i}`]?.coverImage?.large ?? null);
  }
}
