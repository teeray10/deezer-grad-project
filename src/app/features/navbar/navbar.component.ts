import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    value = '';

    constructor(private router: Router) { }

    clearInput(): void {
        this.value = '';
    }

    submitSearch(): void {
        if (this.value) {
            this.router.navigate(['search', this.value]);
            this.clearInput();
        }
    }

    routeHome(): void {
        this.router.navigate(['']);
    }
}
