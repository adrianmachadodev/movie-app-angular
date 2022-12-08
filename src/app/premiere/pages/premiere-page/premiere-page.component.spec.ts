import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierePageComponent } from './premiere-page.component';

describe('PremierePageComponent', () => {
  let component: PremierePageComponent;
  let fixture: ComponentFixture<PremierePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
