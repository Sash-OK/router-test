import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [InfoComponent, UserComponent]
})
export class UserModule { }
