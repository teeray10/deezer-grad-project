import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { Track } from '../models/track';
import { environment } from '../../environments/environment';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    token: string | null = '';

    constructor(private httpClient: HttpClient, private oauthService: OauthService) { }
    
    searchTracks(searchTerm: string | null): Observable<Track[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(environment.oAuthConfig.API_BASE_URL + '/search/track?q=' + searchTerm + '&order=ranking&access_token=' + this.token)
            .pipe(map(response => response.data as Track[]));
    }
    
    searchArtists(searchTerm: string | null): Observable<Artist[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(environment.oAuthConfig.API_BASE_URL + '/search/artist?q=' + searchTerm + '&order=ranking&access_token=' + this.token)
            .pipe(map(response => response.data as Artist[]));
    }
    
    searchAlbums(searchTerm: string | null): Observable<Album[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(environment.oAuthConfig.API_BASE_URL + '/search/album?q=' + searchTerm + '&order=ranking&access_token=' + this.token)
            .pipe(map(response => response.data as Album[]));
    }
}