import { Component } from '@angular/core';
import { MascotComponent } from '../../mascot/mascot';
import { education } from '../../data/cv';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class EducationComponent {
  education = education;
}
