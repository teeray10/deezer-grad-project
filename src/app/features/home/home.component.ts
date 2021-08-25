import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { FavoriteAlbumsService } from 'src/app/services/favorite-albums/favorite-albums.service';
import { FavoriteArtistsService } from 'src/app/services/favorite-artists/favorite-artists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    favoriteAlbums: Album[] = [];
    favoriteArtists: Artist[] = [];
    unsubscribe$ = new Subject();

    constructor(private favoriteAlbumsService: FavoriteAlbumsService, private favoriteArtistsService: FavoriteArtistsService) { }
    
    ngOnInit(): void {
        this.getFavoriteAlbums();
        this.getFavoriteArtists();
    }
    
    private getFavoriteAlbums() {
        this.favoriteAlbumsService.getFavoriteAlbums()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(albums => this.favoriteAlbums = albums);
    }
        
    private getFavoriteArtists() {
        this.favoriteArtistsService.getFavoriteArtists()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(artists => this.favoriteArtists = artists);
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}