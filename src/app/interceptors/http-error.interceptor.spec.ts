import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('HttpErrorInterceptor', () => {
    let httpTestingController: HttpTestingController;
    let interceptor: HttpErrorInterceptor;
    let client: HttpClient;
    let httpRequestSpy;
    let httpHandlerSpy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HttpErrorInterceptor,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpErrorInterceptor,
                    multi: true
                  }            ],
            imports: [
                HttpClientTestingModule
            ]
        });
        client = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        interceptor = TestBed.inject(HttpErrorInterceptor);

    });

    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });
});
