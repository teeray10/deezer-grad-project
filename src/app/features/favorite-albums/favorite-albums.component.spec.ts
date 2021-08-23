import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { FavoriteAlbumsService } from 'src/app/services/favorite-albums.service';

import { FavoriteAlbumsComponent } from './favorite-albums.component';

const successResponse: Album[] = [
    {
        id: 13,
        title: '1989',
        cover_xl: 'https://cdns-images.dzcdn.net/images/cover/8c39b232a5edecdf5fffc14f551fa42b/1000x1000-000000-80-0-0.jpg',
        release_date: '2014-10-27',
        artist: {
            name: 'Taylor Swift'
        }
    }
]

describe('FavoriteAlbumsComponent', () => {
    let component: FavoriteAlbumsComponent;
    let fixture: ComponentFixture<FavoriteAlbumsComponent>;
    let favoriteAlbumsServiceSpy = jasmine.createSpyObj('FavoriteAlbumsService', ['getFavoriteAlbums']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FavoriteAlbumsComponent],
            providers: [
                { provide: FavoriteAlbumsService, useValue: favoriteAlbumsServiceSpy }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        favoriteAlbumsServiceSpy.getFavoriteAlbums.and.returnValue(of([]));
        fixture = TestBed.createComponent(FavoriteAlbumsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('albums should be populated if response has albums', (done: DoneFn) => {
        favoriteAlbumsServiceSpy.getFavoriteAlbums.and.returnValue(of(successResponse));
        component.ngOnInit();
        component.favoriteAlbums$.subscribe(albums => {
            expect(albums.length).toEqual(1);
            expect(albums).toEqual(successResponse);
            done();
        })
    });
});
