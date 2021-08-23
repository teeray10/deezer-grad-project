import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteAlbumsService } from 'src/app/services/favorite-albums.service';
import { Album } from '../../models/album';

@Component({
    selector: 'app-favorite-albums',
    templateUrl: './favorite-albums.component.html',
    styleUrls: ['./favorite-albums.component.scss']
})
export class FavoriteAlbumsComponent implements OnInit {
    favoriteAlbums$!: Observable<Album[]>;

    constructor(private favoriteAlbumsService: FavoriteAlbumsService) { }
    
    ngOnInit(): void {
        this.favoriteAlbums$ = this.favoriteAlbumsService.getFavoriteAlbums();
    }
}