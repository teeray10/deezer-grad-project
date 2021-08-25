import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OauthService } from "./services/oauth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    unsubscribe$ = new Subject();
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private oauthService: OauthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.activatedRoute.fragment
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(fragment => {
                if (fragment) {
                    const isTokenSaved = this.oauthService.checkUrlFragment(fragment);
                    if (isTokenSaved) {
                        this.unsubscribe$.next();
                        this.unsubscribe$.complete();
                        this.router.navigate(['/home']);
                    }
                }
            });
    }
}
