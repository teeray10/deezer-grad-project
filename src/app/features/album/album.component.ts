import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Album } from '../../models/album';
import { Track } from '../../models/track';
import { AlbumService } from '../../services/album/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {
    albumId: string | null = '';
    tracks: Track[] = [];
    selectedAlbum!: Album;
    unsubscribe$ = new Subject();

    constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }
    
    ngOnInit(): void {
        this.albumId = this.getAlbumId();
        this.getSelectedAlbum();
    }
    
    getSelectedAlbum(): void {
        this.albumService.getSelectedAlbum(this.albumId)
        .pipe(takeUntil(this.unsubscribe$))
            .subscribe(album => {
                this.selectedAlbum = album;

                if(album.tracks)
                    this.tracks = album.tracks.data;
            });
    }
    
    getAlbumId(): string | null {
        return this.activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}