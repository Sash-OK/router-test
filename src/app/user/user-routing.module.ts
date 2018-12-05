import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
