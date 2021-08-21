import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { FavoriteArtistsService } from '../../services/favorite-artists.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-artists',
  templateUrl: './favorite-artists.component.html',
  styleUrls: ['./favorite-artists.component.scss']
})
export class FavoriteArtistsComponent implements OnInit {
    favoriteArtists$!: Observable<Artist[]>;

    constructor(private favoriteArtistsService: FavoriteArtistsService) {
    }
    
    ngOnInit(): void {
        this.favoriteArtists$ = this.favoriteArtistsService.getFavoriteArtists();
    }
}