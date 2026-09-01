import { Component } from '@angular/core';
import { MascotComponent } from '../../mascot/mascot';
import { profile } from '../../data/cv';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MascotComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  profile = profile;
}
