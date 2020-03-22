import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CandDeactivateGuard } from './users/user-edit/cad-deactivate-guard.service';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'users', canActivate: [AuthGuard], component: UsersComponent, children: [
    {path:':id', component: UserComponent},
    {path:':id/edit', canDeactivate: [CandDeactivateGuard], component: UserEditComponent}
  ]}
];


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent, 
    UserEditComponent, 
    MainComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CandDeactivateGuard
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
