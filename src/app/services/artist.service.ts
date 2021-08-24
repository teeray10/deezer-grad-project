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
export class ArtistService {
    token: string | null = '';

    constructor(private httpClient: HttpClient, private oauthService: OauthService) { }
    
    getSelectedArtist(id: string | null): Observable<Artist> {
        this.token = this.oauthService.getToken();
        const url = environment.api.PROXY_URL + '/artist/' + id + '?access_token=' + this.token;

        return this.httpClient.get<Artist>(url);
    }
    
    getTopTracks(id: string | null): Observable<Track[]> {
        this.token = this.oauthService.getToken();
        const url = environment.api.PROXY_URL + '/artist/' + id + '/top?limit=5&access_token=' + this.token;

        return this.httpClient.get<any>(url)
            .pipe(map(response => response.data as Track[]));
    }
    
    getAlbums(id: string | null): Observable<Album[]> {
        this.token = this.oauthService.getToken();
        const url = environment.api.PROXY_URL + '/artist/' + id + '/albums&access_token=' + this.token;

        return this.httpClient.get<any>(url)
            .pipe(map(response => response.data as Album[]));
    }
}
