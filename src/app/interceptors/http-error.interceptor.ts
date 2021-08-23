import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
   
export class HttpErrorInterceptor implements HttpInterceptor {
    errorMessage: any = '';
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
        .pipe(
            retry(1),
            catchError(error => {
                this.errorMessage = error;
                return throwError(error);
            })
        )
    }
}