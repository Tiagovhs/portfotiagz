import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero';
import { AboutComponent } from '../../sections/about/about';
import { SkillsComponent } from '../../sections/skills/skills';
import { ExperienceComponent } from '../../sections/experience/experience';
import { ProjectsComponent } from '../../sections/projects/projects';
import { EducationComponent } from '../../sections/education/education';
import { ContactComponent } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, EducationComponent, ContactComponent],
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const navEvent = new CustomEvent('sectionActive', { detail: entry.target.id, bubbles: true });
            entry.target.dispatchEvent(navEvent);
          }
        });
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(s => this.observer!.observe(s));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
