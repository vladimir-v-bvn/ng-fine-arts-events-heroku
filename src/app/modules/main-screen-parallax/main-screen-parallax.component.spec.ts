import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenParallaxComponent } from './main-screen-parallax.component';

describe('MainScreenParallaxComponent', () => {
  let component: MainScreenParallaxComponent;
  let fixture: ComponentFixture<MainScreenParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenParallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
