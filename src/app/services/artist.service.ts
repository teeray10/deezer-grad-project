import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { ArtistTopTrack } from '../models/artist-top-tracks';
import { API_BASE_URL } from '../oauth-config';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
    token: string | null = '';

    constructor(private httpClient: HttpClient, private oauthService: OauthService) { }
    
    getSelectedArtist(id: string | null): Observable<Artist> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<Artist>(API_BASE_URL + '/artist/' + id + '?access_token=' + this.token);
    }

    getTopTracks(id: string | null): Observable<ArtistTopTrack[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(API_BASE_URL + '/artist/' + id + '/top?limit=50&access_token=' + this.token)
            .pipe(map(response => response.data as ArtistTopTrack[]));
    }

    getAlbums(id: string | null): Observable<Album[]> {
        this.token = this.oauthService.getToken();
        return this.httpClient.get<any>(API_BASE_URL + '/artist/' + id + '/albums&access_token=' + this.token)
            .pipe(map(response => response.data as Album[]));
    }
}
