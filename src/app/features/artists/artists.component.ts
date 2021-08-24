import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
    @Input() artists: Artist[] = [];
    @Input() showLimit!: number;

    constructor(private router: Router) { }

    routeToArtist(id: number): void {
        this.router.navigate(['artist', id]);
    }
}