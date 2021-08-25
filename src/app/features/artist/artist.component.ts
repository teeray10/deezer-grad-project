import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { Track } from 'src/app/models/track';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
    artistId: string | null = '';
    tracks: Track[] = [];
    albums: Album[] = [];
    selectedArtist!: Artist;

    constructor(private artistService: ArtistService, private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.artistId = this.getArtistId();
        this.getSelectedArtist();
        this.getTopTracks();
        this.getAlbums();
    }

    getArtistId(): string | null {
        return this.activatedRoute.snapshot.paramMap.get('id');
    }

    getSelectedArtist(): void {
        this.artistService.getSelectedArtist(this.artistId)
            .subscribe(artist => this.selectedArtist = artist);
    }
    
    getTopTracks(): void {
        this.artistService.getTopTracks(this.artistId)
            .subscribe(tracks => this.tracks = tracks);
    }

    getAlbums(): void {
        this.artistService.getAlbums(this.artistId)
            .subscribe(albums => this.albums = albums);
    }
}
