import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRatedComponent } from './cards-rated.component';

describe('CardsRatedComponent', () => {
  let component: CardsRatedComponent;
  let fixture: ComponentFixture<CardsRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
