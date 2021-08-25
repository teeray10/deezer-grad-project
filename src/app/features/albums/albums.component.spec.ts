import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
    let component: AlbumsComponent;
    let fixture: ComponentFixture<AlbumsComponent>;
    let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlbumsComponent],
            providers: [
                { provide: Router, useValue: routerSpy }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlbumsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
