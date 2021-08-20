import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from './app.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { ArtistComponent } from './features/artist/artist.component';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TracksComponent } from './features/tracks/tracks.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
        AppComponent,
        SignInComponent,
        HomeComponent,
        NavbarComponent,
        ArtistComponent,
        TracksComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
