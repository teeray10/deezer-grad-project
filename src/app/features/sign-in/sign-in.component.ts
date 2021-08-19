import { Component } from '@angular/core';
import { oAuthSettings } from '../../oauth-settings';

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
            '?response_type=' + oAuthSettings.responseType +
            '&app_id=' + oAuthSettings.appId +
            '&redirect_uri=' + oAuthSettings.redirectUri +
            '&perms=' + oAuthSettings.permissions;
    }
}