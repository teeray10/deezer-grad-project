import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FavoriteAlbumsService } from '../../services/favorite-albums/favorite-albums.service';
import { FavoriteArtistsService } from '../../services/favorite-artists/favorite-artists.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let favoriteAlbumsServiceSpy = jasmine.createSpyObj('FavoriteAlbumsService', ['getFavoriteAlbums'])
    let favoriteArtistsServiceSpy = jasmine.createSpyObj('FavoriteArtistsService', ['getFavoriteArtists'])

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [
                { provide: FavoriteArtistsService, useValue: favoriteArtistsServiceSpy },
                { provide: FavoriteAlbumsService, useValue: favoriteAlbumsServiceSpy }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        favoriteArtistsServiceSpy.getFavoriteArtists.and.returnValue(of([]));
        favoriteAlbumsServiceSpy.getFavoriteAlbums.and.returnValue(of([]));
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
