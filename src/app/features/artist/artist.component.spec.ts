import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { ArtistTopTrack } from 'src/app/models/artist-top-tracks';
import { ArtistService } from 'src/app/services/artist.service';

import { ArtistComponent } from './artist.component';

const artistInfoResponse: Artist = {
    'id': 27,
    'name': 'Daft Punk',
    'picture_xl': 'https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
    'nb_fan': 4084307
}

const topTracksResponse: ArtistTopTrack[] = [
    {
        "id": 3135553,
        "title": "One More Time",
        "artist": {
            "id": 27,
            "name": "Daft Punk",
        },
        "album": {
            "id": 302127,
            "title": "Discovery"
        }
    }
]

const albumsResponse: Album[] = [
    {
        'id': 8244118,
        'title': 'Human After All (Remixes)',
        'cover_xl': 'https://cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/1000x1000-000000-80-0-0.jpg',
        'release_date': '2005-03-20',
        'artist': {
            'name': 'Daft Punk'
        }
    }
]

describe('ArtistComponent', () => {
    let component: ArtistComponent;
    let fixture: ComponentFixture<ArtistComponent>;
    let artistServiceSpy = jasmine.createSpyObj('ArtistService', ['getSelectedArtist', 'getTopTracks', 'getAlbums']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtistComponent],
            providers: [
                { provide: ArtistService, useValue: artistServiceSpy },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: {
                                get: () => '27'
                            }
                        }
                    }
                }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        artistServiceSpy.getSelectedArtist.and.returnValue(of([]));
        fixture = TestBed.createComponent(ArtistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should populate artistId if it exists', () => {
        expect(component.artistId).toEqual('27');
    });
    
    it('should populate selectedArtist if getSelectedArtist response is success', () => {
        artistServiceSpy.getSelectedArtist.and.returnValue(of(artistInfoResponse));
        component.getSelectedArtist();
        expect(component.selectedArtist).toEqual(artistInfoResponse);
    });

    it('should populate albums$ if getAlbums response is success', (done: DoneFn) => {
        artistServiceSpy.getAlbums.and.returnValue(of(albumsResponse));
        component.getAlbums().subscribe(
            albums => {
                expect(albums).toEqual(albumsResponse);
                done();
            }            
        );
    });

    it('should populate topTracks$ if getTopTracks response is success', (done: DoneFn) => {
        artistServiceSpy.getTopTracks.and.returnValue(of(topTracksResponse));
        component.getTopTracks().subscribe(
            topTracks => {
                expect(topTracks).toEqual(topTracksResponse);
                done();
            }            
        );
    });
});
