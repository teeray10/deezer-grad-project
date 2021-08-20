import { Component } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Track, dummyData } from '../../models/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
    displayedColumns: string[] = ['number', 'track', 'artist', 'album'];
    dataSource: MatTableDataSource<Track>;
  
    constructor() {
        this.dataSource = new MatTableDataSource(dummyData);
    }
}
