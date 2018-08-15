import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterGroupViewComponent } from './chatter-group-view.component';

describe('ChatterGroupViewComponent', () => {
    let component: ChatterGroupViewComponent;
    let fixture: ComponentFixture<ChatterGroupViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatterGroupViewComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatterGroupViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
