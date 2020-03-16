import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'users', component: UsersComponent, children: [
    {path:'user', component: UserComponent},
    {path:'user-edit', component: UserEditComponent}
  ]}
];


@NgModule({
  declarations: [UsersComponent, UserComponent, UserEditComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
