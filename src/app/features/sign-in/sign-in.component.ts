import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    baseOAuthURL = 'https://connect.deezer.com/oauth/auth.php';
    login(): void {
        window.location.href = this.buildURL();
    }

    buildURL(): string {
        return this.baseOAuthURL +
            '?response_type=' + environment.oAuthConfig.RESPONSE_TYPE +
            '&app_id=' + environment.oAuthConfig.APP_ID +
            '&redirect_uri=' + environment.oAuthConfig.REDIRECT_URI +
            '&perms=' + environment.oAuthConfig.PERMISSIONS;
    }
}