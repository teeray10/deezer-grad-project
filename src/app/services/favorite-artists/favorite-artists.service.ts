import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OauthService } from '../oauth/oauth.service';
import { map } from 'rxjs/operators';
import { Artist } from '../../models/artist';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteArtistsService {
    token: string | null = '';

    constructor(private httpClient: HttpClient, private oauthService: OauthService) { }
    
    getFavoriteArtists(): Observable<Artist[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(environment.api.PROXY_URL + '/user/me/artists?access_token=' + this.token)
            .pipe(map(response => response.data as Artist[])); // Extracts array from response object
    }
}