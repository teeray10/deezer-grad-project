import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FavoriteArtistsService } from '../../services/favorite-artists.service';
import { ArtistsComponent } from './artists.component';

describe('FavoriteArtistsComponent', () => {
    let component: ArtistsComponent;
    let fixture: ComponentFixture<ArtistsComponent>;
    let favoriteArtistsServiceSpy = jasmine.createSpyObj('FavoriteArtistsService', ['getFavoriteArtists']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ArtistsComponent ],
            providers: [
                { provide: FavoriteArtistsService, useValue: favoriteArtistsServiceSpy }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        favoriteArtistsServiceSpy.getFavoriteArtists.and.returnValue(of([]));
        fixture = TestBed.createComponent(ArtistsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});