import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarUIUXComponent } from './star-uiux.component';

describe('StarUIUXComponent', () => {
  let component: StarUIUXComponent;
  let fixture: ComponentFixture<StarUIUXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarUIUXComponent]
    });
    fixture = TestBed.createComponent(StarUIUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
