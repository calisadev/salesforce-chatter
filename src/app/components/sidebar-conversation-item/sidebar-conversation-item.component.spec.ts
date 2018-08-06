import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarConversationItemComponent } from './sidebar-conversation-item.component';

describe('SidebarConversationItemComponent', () => {
    let component: SidebarConversationItemComponent;
    let fixture: ComponentFixture<SidebarConversationItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarConversationItemComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarConversationItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
