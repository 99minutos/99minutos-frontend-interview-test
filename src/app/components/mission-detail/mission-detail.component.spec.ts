import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailComponent } from './mission-detail.component';

describe('MissionDetailComponent', () => {
  let component: MissionDetailComponent;
  let fixture: ComponentFixture<MissionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
