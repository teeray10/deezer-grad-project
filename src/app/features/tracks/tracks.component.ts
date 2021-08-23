import { Component, Input } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from 'rxjs';
import { ArtistTopTrack } from 'src/app/models/artist-top-tracks';
import { Track, dummyData } from '../../models/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
    @Input() topTracks$!: Observable<ArtistTopTrack[]>;
    displayedColumns: string[] = ['number', 'track', 'artist', 'album'];
}
