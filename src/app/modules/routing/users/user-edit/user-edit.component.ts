import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {

  allowEditUser = false;

  constructor(private userService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allowEditUser = this.route.snapshot.queryParams['allowEdit'] === '1'? true : false;
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEditUser = queryParams['allowEdit'] === '1'? true : false;
    });

    
  }

  onUpdateUser() {
    this.userService.updateUser({id:1, name:'ulala'});
  }

}
