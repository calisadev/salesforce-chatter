import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterGroupsViewComponent } from './chatter-groups-view.component';

describe('ChatterGroupsViewComponent', () => {
    let component: ChatterGroupsViewComponent;
    let fixture: ComponentFixture<ChatterGroupsViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatterGroupsViewComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatterGroupsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
