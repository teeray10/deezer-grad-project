import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AlbumService } from 'src/app/services/album/album.service';

import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
    let component: AlbumComponent;
    let fixture: ComponentFixture<AlbumComponent>;
    let albumServiceSpy = jasmine.createSpyObj('AlbumService', ['getSelectedAlbum']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlbumComponent],
            providers: [
                { provide: AlbumService, useValue: albumServiceSpy },
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
        albumServiceSpy.getSelectedAlbum.and.returnValue(of([]));
        fixture = TestBed.createComponent(AlbumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
