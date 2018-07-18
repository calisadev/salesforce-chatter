import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterProfileViewComponent } from './chatter-profile-view.component';

describe('ChatterProfileViewComponent', () => {
  let component: ChatterProfileViewComponent;
  let fixture: ComponentFixture<ChatterProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
