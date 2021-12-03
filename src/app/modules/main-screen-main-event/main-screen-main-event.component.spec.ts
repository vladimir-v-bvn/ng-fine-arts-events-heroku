import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenMainEventComponent } from './main-screen-main-event.component';

describe('MainScreenMainEventComponent', () => {
  let component: MainScreenMainEventComponent;
  let fixture: ComponentFixture<MainScreenMainEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenMainEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenMainEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
