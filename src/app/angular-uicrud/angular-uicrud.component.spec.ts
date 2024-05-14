import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUICrudComponent } from './angular-uicrud.component';

describe('AngularUICrudComponent', () => {
  let component: AngularUICrudComponent;
  let fixture: ComponentFixture<AngularUICrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularUICrudComponent]
    });
    fixture = TestBed.createComponent(AngularUICrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
