import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenVideoComponent } from './main-screen-video.component';

describe('MainScreenVideoComponent', () => {
  let component: MainScreenVideoComponent;
  let fixture: ComponentFixture<MainScreenVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
