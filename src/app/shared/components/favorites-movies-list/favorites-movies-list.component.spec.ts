import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesMoviesListComponent } from './favorites-movies-list.component';

describe('FavoritesMoviesListComponent', () => {
  let component: FavoritesMoviesListComponent;
  let fixture: ComponentFixture<FavoritesMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesMoviesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
