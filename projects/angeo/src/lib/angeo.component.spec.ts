import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeoComponent } from './angeo.component';

describe('AngeoComponent', () => {
  let component: AngeoComponent;
  let fixture: ComponentFixture<AngeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngeoComponent]
    });
    fixture = TestBed.createComponent(AngeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
