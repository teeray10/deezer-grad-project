import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Album } from '../../models/album';
import { OauthService } from '../oauth/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
    token: string | null = '';

    constructor(private oauthService: OauthService, private httpClient: HttpClient) { }
    
    getSelectedAlbum(id: string | null): Observable<Album> {
        this.token = this.oauthService.getToken();
        const url = environment.api.PROXY_URL + '/album/' + id + '&access_token=' + this.token;

        return this.httpClient.get<Album>(url);
    }
}
