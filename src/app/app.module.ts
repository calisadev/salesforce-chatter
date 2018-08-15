import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { ChatterGroupViewComponent } from './views/chatter-group-view/chatter-group-view.component';
import { ChatterLoginViewComponent } from './views/chatter-login-view/chatter-login-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatterDirectMessagesViewComponent } from './views/chatter-direct-messages-view/chatter-direct-messages-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule, 
    MatPaginatorModule, MatButtonModule, MatGridListModule, MatCheckboxModule, MatIconModule, MatChipsModule, MatTableModule,
    MatSidenavModule, MatExpansionModule, MatDialogModule, MatSelectModule, MatSnackBarModule, MatAutocompleteModule, MatTabsModule, MatDividerModule, MatListModule } from '@angular/material';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { FeedViewComponent } from './components/feed-view/feed-view.component';
import { FeedComposerComponent } from './components/feed-composer/feed-composer.component';
import { SidebarGroupItemComponent } from './components/sidebar-group-item/sidebar-group-item.component';
import { SidebarConversationItemComponent } from './components/sidebar-conversation-item/sidebar-conversation-item.component';
import { ChatComposerComponent } from './components/chat-composer/chat-composer.component';
import { CreateGroupDialogComponent } from './components/create-group-dialog/create-group-dialog.component';
import { CreateConversationDialogComponent } from './components/create-conversation-dialog/create-conversation-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatterGroupViewComponent,
        ChatterLoginViewComponent,
        ChatterDirectMessagesViewComponent,
        MainMenuComponent,
        PageHeaderComponent,
        SidebarListComponent,
        ChatViewComponent,
        FeedViewComponent,
        FeedComposerComponent,
        SidebarGroupItemComponent,
        SidebarConversationItemComponent,
        ChatComposerComponent,
        CreateGroupDialogComponent,
        CreateConversationDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
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
        MatExpansionModule,
        MatDialogModule,
        MatSelectModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatDividerModule,
        MatListModule
    ],
    entryComponents: [
        CreateGroupDialogComponent,
        CreateConversationDialogComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule { }
