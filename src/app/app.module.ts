import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { AuthenticatedUserModule } from './features/authenticated-user/authenticated-user.module';

// Material Modules
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
        AppComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        AuthenticatedUserModule
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
