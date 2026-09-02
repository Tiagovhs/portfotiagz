import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotComponent, MascotOutfit } from '../mascot/mascot';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  outfit: MascotOutfit;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MascotComponent],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class NavComponent {
  activeIndex = signal(0);

  navItems: NavItem[] = [
    { id: 'hero', label: 'Accueil', icon: 'home', outfit: 'hero' },
    { id: 'about', label: 'À propos', icon: 'person', outfit: 'about' },
    { id: 'skills', label: 'Compétences', icon: 'code', outfit: 'skills' },
    { id: 'experience', label: 'Expérience', icon: 'work', outfit: 'experience' },
    { id: 'projects', label: 'Projets', icon: 'folder', outfit: 'projects' },
    { id: 'education', label: 'Formation', icon: 'school', outfit: 'education' },
    { id: 'passions', label: 'Passions', icon: 'favorite', outfit: 'passions' },
    { id: 'contact', label: 'Contact', icon: 'mail', outfit: 'contact' },
  ];

  scrollTo(index: number, id: string) {
    this.activeIndex.set(index);
    const el = document.getElementById(id);
    if (!el) return;
    const start = window.scrollY;
    const target = el.getBoundingClientRect().top + window.scrollY - 24;
    const duration = 480;
    let startTime: number | null = null;
    const easeInOut = (t: number) => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    const step = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, start + (target - start) * easeInOut(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}
