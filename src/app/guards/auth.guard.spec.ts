import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OauthService } from '../services/oauth/oauth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let oauthServiceSpy = jasmine.createSpyObj('OauthService', ['getToken']);
    let routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);

  beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [
              { provide: OauthService, useValue: oauthServiceSpy },
              { provide: Router, useValue: routerSpy }
          ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
