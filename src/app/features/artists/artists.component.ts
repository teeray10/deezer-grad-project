import { Component, Input } from '@angular/core';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
    @Input() artists: Artist[] = [];
    @Input() showLimit!: number;
}