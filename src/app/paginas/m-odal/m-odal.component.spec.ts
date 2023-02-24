import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MODALComponent } from './m-odal.component';

describe('MODALComponent', () => {
  let component: MODALComponent;
  let fixture: ComponentFixture<MODALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MODALComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MODALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
