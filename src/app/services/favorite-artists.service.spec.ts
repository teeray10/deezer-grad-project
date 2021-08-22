import { HttpClientTestingModule, HttpTestingController, TestRequest  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FavoriteArtistsService } from './favorite-artists.service';
import { OauthService } from './oauth.service';
import { API_BASE_URL } from '../oauth-config';

const successResponse = {
    data: [
        {
            "id": 13,
            "name": "Eminem",
            "link": "https://www.deezer.com/artist/13",
            "picture": "https://api.deezer.com/artist/13/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg",
            "nb_album": 44,
            "nb_fan": 14445125,
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
            "time_add": 1629468654,
            "type": "artist"
        }
    ]
}

const errorResponse = {
    "error": {
        "type": "OAuthException",
        "message": "Invalid OAuth access token.",
        "code": 300
    }
}

describe('FavoriteArtistsService', () => {
    let service: FavoriteArtistsService;
    let httpTestingController: HttpTestingController;
    const oauthServiceSpy = jasmine.createSpyObj('OauthService', ['getToken']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FavoriteArtistsService,
                { provide: OauthService, useValue: oauthServiceSpy }
            ],
            imports: [
                HttpClientTestingModule
            ]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(FavoriteArtistsService);
    });

    afterEach(() => {
        httpTestingController.verify(); // Check that there are no outstanding requests
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('oauthServie.getToken should be called', () => {
        service.getFavoriteArtists();
        expect(oauthServiceSpy.getToken).toHaveBeenCalled();
    });

    it('httpClient.get should be called', () => {
        service.getFavoriteArtists().subscribe();
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/artists?access_token=' + service.token);
        expect(request).toBeTruthy();
    });

    it('httpClient.get should use GET method', () => {
        service.getFavoriteArtists().subscribe();
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/artists?access_token=' + service.token);
        expect(request.request.method).toEqual('GET');
    });

    it('should throw error and return error message when api responds with error', (done: DoneFn) => {
        service.getFavoriteArtists().subscribe(response => {
            expect(response).toBeInstanceOf(Error);
            done();
        });
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/artists?access_token=' + service.token);
        request.flush(errorResponse);
    });

    it('should return list of artists when api responds with success', (done: DoneFn) => {
        service.getFavoriteArtists().subscribe(response => {
            expect(response.length).toEqual(1);
            done();
        });
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/artists?access_token=' + service.token);
        request.flush(successResponse);
    });
});