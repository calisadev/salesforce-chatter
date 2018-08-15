import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterDirectMessagesViewComponent } from './chatter-direct-messages-view.component';

describe('ChatterDirectMessagesViewComponent', () => {
    let component: ChatterDirectMessagesViewComponent;
    let fixture: ComponentFixture<ChatterDirectMessagesViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatterDirectMessagesViewComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatterDirectMessagesViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
