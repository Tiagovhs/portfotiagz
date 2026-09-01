import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MascotComponent } from '../../mascot/mascot';
import { projects, Project } from '../../data/cv';

type Filter = 'Tous' | 'Web' | 'API' | 'Outils';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, MascotComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  filters: Filter[] = ['Tous', 'Web', 'API', 'Outils'];
  activeFilter = signal<Filter>('Tous');

  get filtered(): Project[] {
    const f = this.activeFilter();
    return f === 'Tous' ? projects : projects.filter(p => p.category === f);
  }

  setFilter(f: Filter) { this.activeFilter.set(f); }
}
