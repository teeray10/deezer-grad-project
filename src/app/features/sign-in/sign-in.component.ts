import { Component } from '@angular/core';
import { oAuthConfig } from '../../oauth-config';

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
            '?response_type=' + oAuthConfig.responseType +
            '&app_id=' + oAuthConfig.appId +
            '&redirect_uri=' + oAuthConfig.redirectUri +
            '&perms=' + oAuthConfig.permissions;
    }
}