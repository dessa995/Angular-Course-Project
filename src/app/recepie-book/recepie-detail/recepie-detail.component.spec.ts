import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieDetailComponent } from './recepie-detail.component';

describe('RecepieDetailComponent', () => {
  let component: RecepieDetailComponent;
  let fixture: ComponentFixture<RecepieDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepieDetailComponent]
    });
    fixture = TestBed.createComponent(RecepieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
