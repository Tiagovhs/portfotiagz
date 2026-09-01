import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { projects, Project } from '../../data/cv';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project = signal<Project | null>(null);
  nextProject = signal<Project | null>(null);

  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      const idx = projects.findIndex(p => p.slug === slug);
      if (idx === -1) { this.router.navigate(['/']); return; }
      this.project.set(projects[idx]);
      this.nextProject.set(projects[(idx + 1) % projects.length]);
      window.scrollTo({ top: 0 });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
