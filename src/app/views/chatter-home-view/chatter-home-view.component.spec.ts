import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterHomeViewComponent } from './chatter-home-view.component';

describe('ChatterHomeViewComponent', () => {
    let component: ChatterHomeViewComponent;
    let fixture: ComponentFixture<ChatterHomeViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatterHomeViewComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatterHomeViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
