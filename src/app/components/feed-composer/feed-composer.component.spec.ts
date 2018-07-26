import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComposerComponent } from './feed-composer.component';

describe('FeedComposerComponent', () => {
  let component: FeedComposerComponent;
  let fixture: ComponentFixture<FeedComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
