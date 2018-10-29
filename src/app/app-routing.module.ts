import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuestComponent} from './guest/guest/guest.component';
import {UserComponent} from './user/user/user.component';
import {LoginComponent} from './guest/login/login.component';
import {RegistrationComponent} from './guest/registration/registration.component';
import {InfoComponent} from './user/info/info.component';
import {PicturesComponent} from './user/pictures/pictures.component';

const routes: Routes = [
    {
        path: '',
        component: GuestComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            }
        ]
    },
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'info'
            },
            {
                path: 'info',
                component: InfoComponent
            },
            {
                path: 'pictures',
                component: PicturesComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
