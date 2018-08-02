import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComposerComponent } from './chat-composer.component';

describe('ChatComposerComponent', () => {
    let component: ChatComposerComponent;
    let fixture: ComponentFixture<ChatComposerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatComposerComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatComposerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
