import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenControlsComponent } from './main-screen-controls.component';

describe('MainScreenControlsComponent', () => {
  let component: MainScreenControlsComponent;
  let fixture: ComponentFixture<MainScreenControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
