import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { ArtistComponent } from '../artist/artist.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { AuthenticatedUserComponent } from './authenticated-user.component';

const routes: Routes = [
    {
        path: '',
        component: AuthenticatedUserComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'artist/:id',
                component: ArtistComponent
            },
            {
                path: 'search/:searchTerm',
                component: SearchComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }      
        ],
        canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedUserRoutingModule { }
