import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaAmericanaComponent } from './clinica-americana.component';

describe('ClinicaAmericanaComponent', () => {
  let component: ClinicaAmericanaComponent;
  let fixture: ComponentFixture<ClinicaAmericanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicaAmericanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaAmericanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
