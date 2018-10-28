import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [LoginComponent, GuestComponent]
})
export class GuestModule { }
