import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { ArtistTopTrack } from 'src/app/models/artist-top-tracks';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
    artistId: string | null = '';
    topTracks$!: Observable<ArtistTopTrack[]>;
    albums$!: Observable<Album[]>;
    selectedArtist!: Artist;

    constructor(private artistService: ArtistService, private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.artistId = this.getParamId();
        this.getSelectedArtist();
        this.topTracks$ = this.getTopTracks();
        this.albums$ = this.getAlbums();
    }

    getParamId(): string | null {
        return this.activatedRoute.snapshot.paramMap.get('id');
    }

    getSelectedArtist(): void {
        this.artistService.getSelectedArtist(this.artistId)
            .subscribe(artist => this.selectedArtist = artist);
    }
    
    getTopTracks(): Observable<ArtistTopTrack[]> {
        return this.artistService.getTopTracks(this.artistId);
    }

    getAlbums(): Observable<Album[]> {
        return this.artistService.getAlbums(this.artistId);
    }
}
