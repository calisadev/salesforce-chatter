import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatViewItemComponent } from './chat-view-item.component';

describe('ChatViewItemComponent', () => {
    let component: ChatViewItemComponent;
    let fixture: ComponentFixture<ChatViewItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatViewItemComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatViewItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
