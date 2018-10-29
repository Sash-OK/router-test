import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { PicturesComponent } from './pictures/pictures.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [InfoComponent, UserComponent, PicturesComponent]
})
export class UserModule { }
