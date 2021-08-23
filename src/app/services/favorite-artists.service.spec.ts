import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FavoriteArtistsService } from './favorite-artists.service';
import { OauthService } from './oauth.service';
import { API_BASE_URL } from '../oauth-config';
import { Artist } from '../models/artist';

const successResponse = {
    data: [
        {
            id: 13,
            name: "Eminem",
            picture_xl: "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg",
            nb_fan: 14445125
        }
    ]
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

    it('should return list of artists when api responds with success', (done: DoneFn) => {
        service.getFavoriteArtists().subscribe(response => {
            expect(response).toEqual(successResponse.data as Artist[]);
            done();
        });
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/artists?access_token=' + service.token);
        request.flush(successResponse);
    });
});