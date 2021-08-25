import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OauthService } from '../oauth/oauth.service';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
    let service: AlbumService;
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
      service = TestBed.inject(AlbumService);
  });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
