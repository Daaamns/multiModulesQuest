import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserListComponent } from './components/feature/user-list/user-list.component';
import { UsersComponent } from './components/ui/users/users.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AdminHomeComponent, UserListComponent, UsersComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
