import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from "./features/artist/artist.component";
import { HomeComponent } from "./features/home/home.component";
import { SearchComponent } from './features/search/search.component';
import { SignInComponent } from './features/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent
    },
    {
        path: 'login',
        component: SignInComponent
    },
    {
        path: 'search/:searchTerm',
        component: SearchComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
