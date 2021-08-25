import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
    checkUrlFragment(fragment: string): boolean {
        const params = new URLSearchParams(fragment);
        const accessToken = params.get('access_token');

        if (accessToken) {
            this.saveToken(accessToken);
            return true;
        }

        return false;
    }
    
    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    private saveToken(accessToken: string): void {
        localStorage.setItem('access_token', accessToken);
    }
}
