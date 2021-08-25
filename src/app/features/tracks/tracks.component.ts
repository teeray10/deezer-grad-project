import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Track } from '../../models/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
    @Input() tracks: Track[] = [];
    @Input() showLimit!: number;
    @Input() calledByAlbum = false;
    displayedColumns: string[] = ['number', 'track', 'artist', 'album'];
    screenWidth!: number;
    private _unsubscribe$ = new Subject();

    ngOnInit(): void {
        this.getScreenSize();
    }

    private getScreenSize(): void {
        this.screenWidth = window.innerWidth;
        fromEvent(window, 'resize')
            .pipe(
                takeUntil(this._unsubscribe$)
            ).subscribe((evt: any) => {
                this.screenWidth = evt.target.innerWidth;
            });
    }
}
