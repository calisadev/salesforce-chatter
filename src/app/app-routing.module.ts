import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatterGroupViewComponent } from './views/chatter-group-view/chatter-group-view.component';
import { ChatterLoginViewComponent } from './views/chatter-login-view/chatter-login-view.component';
import { ChatterDirectMessagesViewComponent } from './views/chatter-direct-messages-view/chatter-direct-messages-view.component';

import { EnsureAuthenticatedGuardService } from './services/authentication/ensure-authenticated-guard.service';
import { LoginRedirectGuardService } from './services/authentication/login-redirect-guard.service';
import { LogoutRedirectGuardService } from './services/authentication/logout-redirect-guard.service';
const routes: Routes = [
    {
        path: '',
        component: ChatterGroupViewComponent,
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
        path: 'groups',
        component: ChatterGroupViewComponent,
        canActivate: [EnsureAuthenticatedGuardService]
    }, {
        path: 'direct-messages',
        component: ChatterDirectMessagesViewComponent,
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
