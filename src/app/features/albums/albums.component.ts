import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
    @Input() albums: Album[] = [];
    @Input() showLimit!: number;

    constructor(private router: Router) { }

    routeToAlbum(id: number): void {
        this.router.navigate(['album', id]);
    }
}