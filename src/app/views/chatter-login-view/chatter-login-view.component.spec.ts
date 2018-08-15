import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterLoginViewComponent } from './chatter-login-view.component';

describe('ChatterLoginViewComponent', () => {
    let component: ChatterLoginViewComponent;
    let fixture: ComponentFixture<ChatterLoginViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatterLoginViewComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatterLoginViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
