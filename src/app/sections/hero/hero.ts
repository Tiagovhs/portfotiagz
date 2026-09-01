import { Component } from '@angular/core';
import { profile } from '../../data/cv';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  profile = profile;
}
