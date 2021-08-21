import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FavoriteArtistsService } from 'src/app/services/favorite-artists.service';
import { FavoriteArtistsComponent } from './favorite-artists.component';

describe('FavoriteArtistsComponent', () => {
    let component: FavoriteArtistsComponent;
    let fixture: ComponentFixture<FavoriteArtistsComponent>;
    let favoriteArtistsServiceSpy = jasmine.createSpyObj('FavoriteArtistsService', ['getFavoriteArtists']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ FavoriteArtistsComponent ],
            providers: [
                { provide: FavoriteArtistsService, useValue: favoriteArtistsServiceSpy }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        favoriteArtistsServiceSpy.getFavoriteArtists.and.returnValue(of([]));
        fixture = TestBed.createComponent(FavoriteArtistsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});