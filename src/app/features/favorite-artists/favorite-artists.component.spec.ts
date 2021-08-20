import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArtistsComponent } from './favorite-artists.component';

describe('FavoriteArtistsComponent', () => {
  let component: FavoriteArtistsComponent;
  let fixture: ComponentFixture<FavoriteArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
