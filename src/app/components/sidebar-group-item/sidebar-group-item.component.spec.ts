import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGroupItemComponent } from './sidebar-group-item.component';

describe('SidebarGroupItemComponent', () => {
    let component: SidebarGroupItemComponent;
    let fixture: ComponentFixture<SidebarGroupItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarGroupItemComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarGroupItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
