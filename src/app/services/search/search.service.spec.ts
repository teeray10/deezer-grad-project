import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OauthService } from '../oauth/oauth.service';

import { SearchService } from './search.service';

describe('SearchService', () => {
    let service: SearchService;
    let oauthServiceSpy = jasmine.createSpyObj('OauthService', ['getToken']);
    let httpTestingController: HttpTestingController;

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
        service = TestBed.inject(SearchService);
    });

    afterEach(() => {
        httpTestingController.verify(); // Check that there are no outstanding requests
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
