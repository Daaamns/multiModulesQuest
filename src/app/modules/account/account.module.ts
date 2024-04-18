import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { UserRandomComponent } from './components/feature/user-random/user-random.component';
import { UserComponent } from './components/ui/user/user.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    UserRandomComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
