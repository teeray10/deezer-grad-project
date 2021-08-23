import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API_BASE_URL } from '../oauth-config';
import { OauthService } from './oauth.service';
import { map } from 'rxjs/operators';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class FavoriteArtistsService {
    token: string | null = '';

    constructor(private httpClient: HttpClient, private oauthService: OauthService) { }
    
    getFavoriteArtists(): Observable<Artist[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(API_BASE_URL + '/user/me/artists?access_token=' + this.token)
            .pipe(map(response => response.data as Artist[])); // Extracts array from response object
    }
}