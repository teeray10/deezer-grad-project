import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let searchServiceSpy = jasmine.createSpyObj('SearchService', ['searchTracks', 'searchArtists', 'searchAlbums']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            providers: [
                { provide: SearchService, useValue: searchServiceSpy },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({
                            get: () => '27'
                        })
                    }
                }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        searchServiceSpy.searchTracks.and.returnValue(of([]));
        searchServiceSpy.searchAlbums.and.returnValue(of([]));
        searchServiceSpy.searchArtists.and.returnValue(of([]));
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
