import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationbackgroundComponent } from './animationbackground.component';

describe('AnimationbackgroundComponent', () => {
  let component: AnimationbackgroundComponent;
  let fixture: ComponentFixture<AnimationbackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationbackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
