import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { ArtistComponent } from './features/artist/artist.component';
import { AlbumsComponent } from './features/albums/albums.component';
import { FavoriteArtistsComponent } from './features/favorite-artists/favorite-artists.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TracksComponent } from './features/tracks/tracks.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FavoriteAlbumsComponent } from './features/favorite-albums/favorite-albums.component';
import { SearchComponent } from './features/search/search.component';

@NgModule({
  declarations: [
        AppComponent,
        SignInComponent,
        HomeComponent,
        NavbarComponent,
        ArtistComponent,
        TracksComponent,
        AlbumsComponent,
        FavoriteArtistsComponent,
        FavoriteAlbumsComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatCardModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
