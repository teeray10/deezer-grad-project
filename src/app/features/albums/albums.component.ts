import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
    @Input() albums: Album[] = [];
    @Input() showLimit!: number;
}