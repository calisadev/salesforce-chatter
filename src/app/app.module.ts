import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { ChatterHomeViewComponent } from './views/chatter-home-view/chatter-home-view.component';
import { ChatterLoginViewComponent } from './views/chatter-login-view/chatter-login-view.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ChatterProfileViewComponent } from './views/chatter-profile-view/chatter-profile-view.component';
import { ChatterGroupsViewComponent } from './views/chatter-groups-view/chatter-groups-view.component';
import { ChatterUsersViewComponent } from './views/chatter-users-view/chatter-users-view.component';
import { ChatterDirectMessagesViewComponent } from './views/chatter-direct-messages-view/chatter-direct-messages-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatDividerModule, MatCardModule, MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule, 
    MatPaginatorModule, MatButtonModule, MatGridListModule, MatCheckboxModule, MatIconModule, MatChipsModule, MatTableModule,
    MatSidenavModule, MatExpansionModule } from '@angular/material';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { FeedViewComponent } from './components/feed-view/feed-view.component';
import { FeedComposerComponent } from './components/feed-composer/feed-composer.component';
import { SidebarGroupItemComponent } from './components/sidebar-group-item/sidebar-group-item.component';
import { SidebarConversationItemComponent } from './components/sidebar-conversation-item/sidebar-conversation-item.component';
import { ChatComposerComponent } from './components/chat-composer/chat-composer.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatterHomeViewComponent,
        ChatterLoginViewComponent,
        ChatterProfileViewComponent,
        ChatterGroupsViewComponent,
        ChatterUsersViewComponent,
        ChatterDirectMessagesViewComponent,
        MainMenuComponent,
        PageHeaderComponent,
        SidebarListComponent,
        ChatViewComponent,
        FeedViewComponent,
        FeedComposerComponent,
        SidebarGroupItemComponent,
        SidebarConversationItemComponent,
        ChatComposerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatCheckboxModule,
        MatIconModule,
        MatChipsModule,
        MatSidenavModule,
        MatExpansionModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule { }
