import { Component } from '@angular/core';
import { MascotComponent } from '../../mascot/mascot';
import { experiences } from '../../data/cv';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experiences = experiences;
}
