import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSecComponent } from './team-sec.component';

describe('TeamSecComponent', () => {
  let component: TeamSecComponent;
  let fixture: ComponentFixture<TeamSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
