import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OauthService } from "./services/oauth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private oauthService: OauthService) {
    }

    ngOnInit() {
        this.activatedRoute.fragment.subscribe(fragment => {
            if (fragment)
                this.oauthService.checkUrlFragment(fragment);
        });
    }
}
