import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcenterComponent } from './medicalcenter.component';

describe('MedicalcenterComponent', () => {
  let component: MedicalcenterComponent;
  let fixture: ComponentFixture<MedicalcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalcenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
