import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterUsersViewComponent } from './chatter-users-view.component';

describe('ChatterUsersViewComponent', () => {
  let component: ChatterUsersViewComponent;
  let fixture: ComponentFixture<ChatterUsersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterUsersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
