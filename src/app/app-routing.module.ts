import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticatedUserComponent } from './features/authenticated-user/authenticated-user.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', component: AuthenticatedUserComponent, canActivate: [AuthGuard] },
            { path: 'login', component: SignInComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
