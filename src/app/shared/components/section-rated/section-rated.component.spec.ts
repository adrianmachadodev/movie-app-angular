import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRatedComponent } from './section-rated.component';

describe('SectionRatedComponent', () => {
  let component: SectionRatedComponent;
  let fixture: ComponentFixture<SectionRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
