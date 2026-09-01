import { Component } from '@angular/core';
import { MascotComponent } from '../../mascot/mascot';
import { skills, Skill } from '../../data/cv';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  categories = ['Front', 'Back', 'Données', 'Ops'] as const;

  byCategory(cat: string): Skill[] {
    return skills.filter(s => s.category === cat);
  }
}
