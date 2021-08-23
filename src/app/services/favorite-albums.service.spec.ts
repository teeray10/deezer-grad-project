import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Album } from '../models/album';
import { API_BASE_URL } from '../oauth-config';

import { FavoriteAlbumsService } from './favorite-albums.service';
import { OauthService } from './oauth.service';

const successResponse = {
    data: [
        {
            id: 13,
            title: '1989',
            cover_xl: 'https://cdns-images.dzcdn.net/images/cover/8c39b232a5edecdf5fffc14f551fa42b/1000x1000-000000-80-0-0.jpg',
            release_date: '2014-10-27',
            artist: {
                name: 'Taylor Swift'
            }
        }
    ]
}

describe('FavoriteAlbumsService', () => {
    let service: FavoriteAlbumsService;
    let httpTestingController: HttpTestingController;
    const oauthServiceSpy = jasmine.createSpyObj('OauthService', ['getToken']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FavoriteAlbumsService,
                { provide: OauthService, useValue: oauthServiceSpy }
            ],
            imports: [
                HttpClientTestingModule
            ]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(FavoriteAlbumsService);
    });

    afterEach(() => {
        httpTestingController.verify(); // Check that there are no outstanding requests
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('oauthServie.getToken should be called', () => {
        service.getFavoriteAlbums();
        expect(oauthServiceSpy.getToken).toHaveBeenCalled();
    });

    it('httpClient.get should be called', () => {
        service.getFavoriteAlbums().subscribe();
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/albums?access_token=' + service.token);
        expect(request).toBeTruthy();
    });

    it('httpClient.get should use GET method', () => {
        service.getFavoriteAlbums().subscribe();
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/albums?access_token=' + service.token);
        expect(request.request.method).toEqual('GET');
    });

    it('should return list of albums when api responds with success', (done: DoneFn) => {
        service.getFavoriteAlbums().subscribe(response => {
            expect(response).toEqual(successResponse.data as Album[]);
            done();
        });
        const request = httpTestingController.expectOne(API_BASE_URL + '/user/me/albums?access_token=' + service.token);
        request.flush(successResponse);
    });
});
