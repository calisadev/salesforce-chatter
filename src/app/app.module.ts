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
    MatSidenavModule } from '@angular/material';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

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
        PageHeaderComponent
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
        MatSidenavModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule { }
