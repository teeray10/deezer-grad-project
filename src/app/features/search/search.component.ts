import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { Track } from 'src/app/models/track';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    tabs: string[] = ['Artists', 'Tracks', 'Albums'];
    unsubscribe$= new Subject<any>();
    searchTerm: string | null = '';
    tracks: Track[] = [];
    albums: Album[] = [];
    artists: Artist[] = [];
    
    constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.activatedRoute.paramMap
            .subscribe(params => {
                this.unsubscribeAll();
                this.searchTerm = params.get('searchTerm');
                this.subscribeAll();
            });
    }
    
    private searchTracks(): void {
        this.searchService.searchTracks(this.searchTerm)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(tracks => this.tracks = tracks);
    }
    
    private searchAlbums(): void {
        this.searchService.searchAlbums(this.searchTerm)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(albums => this.albums = albums);
    }
    
    private searchArtists(): void {
        this.searchService.searchArtists(this.searchTerm)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(artists => this.artists = artists);
    }

    isSearchSuccess(): boolean {
        return (this.tracks.length > 0 && this.albums.length > 0 && this.artists.length > 0) ? true : false;
    }

    private subscribeAll(): void {
        this.searchTracks();
        this.searchArtists();
        this.searchAlbums();
    }
    
    private unsubscribeAll(): void {
        this.unsubscribe$.next();
    }
    
    ngOnDestroy(): void {
        this.unsubscribeAll();
        this.unsubscribe$.complete();
    }
}