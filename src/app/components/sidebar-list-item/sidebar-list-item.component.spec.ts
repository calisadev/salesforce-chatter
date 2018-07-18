import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarListItemComponent } from './sidebar-list-item.component';

describe('SidebarListItemComponent', () => {
    let component: SidebarListItemComponent;
    let fixture: ComponentFixture<SidebarListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarListItemComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
