import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatterHomeViewComponent } from './views/chatter-home-view/chatter-home-view.component';
import { ChatterLoginViewComponent } from './views/chatter-login-view/chatter-login-view.component';
import { ChatterGroupsViewComponent } from './views/chatter-groups-view/chatter-groups-view.component';
import { ChatterProfileViewComponent } from './views/chatter-profile-view/chatter-profile-view.component';
import { ChatterDirectMessagesViewComponent } from './views/chatter-direct-messages-view/chatter-direct-messages-view.component';
import { ChatterUsersViewComponent } from './views/chatter-users-view/chatter-users-view.component';

import { EnsureAuthenticatedGuardService } from './services/authentication/ensure-authenticated-guard.service';
import { LoginRedirectGuardService } from './services/authentication/login-redirect-guard.service';
import { LogoutRedirectGuardService } from './services/authentication/logout-redirect-guard.service';
const routes: Routes = [
    {
        path: '',
        component: ChatterHomeViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }, {
        path: 'login',
        component: ChatterLoginViewComponent,
        canActivate: [LoginRedirectGuardService]
    }, {
        path: 'logout',
        component: ChatterLoginViewComponent,
        canActivate: [LogoutRedirectGuardService]
    }, {
        path: 'home',
        component: ChatterHomeViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }, {
        path: 'groups',
        component: ChatterGroupsViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }, {
        path: 'direct-messages',
        component: ChatterDirectMessagesViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }, {
        path: 'users',
        component: ChatterUsersViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }, {
        path: 'profile/:id',
        component: ChatterProfileViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
