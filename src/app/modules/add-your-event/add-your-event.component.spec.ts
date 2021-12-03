import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourEventComponent } from './add-your-event.component';

describe('AddYourEventComponent', () => {
  let component: AddYourEventComponent;
  let fixture: ComponentFixture<AddYourEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYourEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYourEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
