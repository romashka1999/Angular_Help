import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();

    this.usersService.userUpdated.subscribe((msg:any) => {
      this.users = this.usersService.getUsers();
    });
  }

}
