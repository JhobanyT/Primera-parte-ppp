import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalcmmComponent } from './hospitalcmm.component';

describe('HospitalcmmComponent', () => {
  let component: HospitalcmmComponent;
  let fixture: ComponentFixture<HospitalcmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalcmmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalcmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
