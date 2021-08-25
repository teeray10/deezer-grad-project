import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ArtistService } from './artist.service';
import { OauthService } from '../oauth/oauth.service';

describe('ArtistService', () => {
    let service: ArtistService;
    let httpTestingController: HttpTestingController;
    let oauthServiceSpy = jasmine.createSpyObj('OauthService', ['getToken']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: OauthService, useValue: oauthServiceSpy }
            ],
            imports: [
                HttpClientTestingModule
            ]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ArtistService);
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
