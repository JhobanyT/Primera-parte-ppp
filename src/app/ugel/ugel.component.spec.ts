import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgelComponent } from './ugel.component';

describe('UgelComponent', () => {
  let component: UgelComponent;
  let fixture: ComponentFixture<UgelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
