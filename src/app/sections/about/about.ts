import { Component } from '@angular/core';
import { MascotComponent } from '../../mascot/mascot';
import { profile } from '../../data/cv';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  profile = profile;
  tags = ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'Docker', 'PostgreSQL', 'GitHub Actions', 'Linux'];
}
