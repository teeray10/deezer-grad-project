import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

// App components
import { AuthenticatedUserRoutingModule } from './authenticated-user-routing.module';
import { AuthenticatedUserComponent } from '../authenticated-user/authenticated-user.component';
import { TracksComponent } from '../tracks/tracks.component';
import { SearchComponent } from '../search/search.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArtistComponent } from '../artist/artist.component';
import { AlbumsComponent } from '../albums/albums.component';
import { ArtistsComponent } from '../artists/artists.component';
import { AlbumComponent } from '../album/album.component';

@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        ArtistComponent,
        TracksComponent,
        AlbumsComponent,
        ArtistsComponent,
        SearchComponent,
        AuthenticatedUserComponent,
        AlbumComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatCardModule,
        AuthenticatedUserRoutingModule,
        FormsModule
    ]
})
export class AuthenticatedUserModule { }
