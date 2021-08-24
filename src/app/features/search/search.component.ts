import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { Track } from 'src/app/models/track';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    tabs: string[] = ['Artists', 'Tracks', 'Albums'];
    searchTerm: string | null = '';
    tracks: Track[] = [];
    albums: Album[] = [];
    artists: Artist[] = [];
    
    constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.searchTerm = this.getSearchTerm();
        this.searchTracks();
        this.searchArtists();
        this.searchAlbums();
    }

    getSearchTerm(): string | null {
        return this.activatedRoute.snapshot.paramMap.get('searchTerm');
    }

    searchTracks(): void {
        this.searchService.searchTracks(this.searchTerm)
            .subscribe(tracks => this.tracks = tracks);
    }

    searchAlbums(): void {
        this.searchService.searchAlbums(this.searchTerm)
            .subscribe(albums => this.albums = albums);
    }

    searchArtists(): void {
        this.searchService.searchArtists(this.searchTerm)
            .subscribe(artists => this.artists = artists);
    }
}