import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album';
import { API_BASE_URL } from '../oauth-config';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteAlbumsService {
    token: string | null = '';

    constructor(private httpClient: HttpClient, private oauthService: OauthService) { }
    
    getFavoriteAlbums(): Observable<Album[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(API_BASE_URL + '/user/me/albums?access_token=' + this.token)
            .pipe(map(response => response.data as Album[])); // Extracts array from response object
    }
}
