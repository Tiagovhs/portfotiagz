import { Component, input, computed } from '@angular/core';

export type MascotOutfit = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

const OUTFIT_IMAGES: Record<MascotOutfit, string> = {
  hero:       'mascot/photo.png',
  about:      'mascot/TiagzPassion.png',
  skills:     'mascot/TiagzDev.png',
  experience: 'mascot/TiagzDev.png',
  projects:   'mascot/TiagzBasket.png',
  education:  'mascot/tiagzDiplome.png',
  contact:    'mascot/TiagzPassion.png',
};

@Component({
  selector: 'app-mascot',
  standalone: true,
  templateUrl: './mascot.html',
})
export class MascotComponent {
  outfit = input<MascotOutfit>('hero');
  size = input<number>(44);

  src = computed(() => OUTFIT_IMAGES[this.outfit()]);
}
