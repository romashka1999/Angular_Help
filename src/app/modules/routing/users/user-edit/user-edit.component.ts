import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CanDeactivateComponent } from './cad-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit, CanDeactivateComponent {

  user: any;
  username='';
  allowEditUser = false;
  userChangesSaved = false;

  constructor(private userService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params.id;
      this.user = this.userService.getUserById(id);
      this.username = this.user.name;
    })
    this.allowEditUser = this.route.snapshot.queryParams['allowEdit'] === '1'? true : false;
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEditUser = queryParams['allowEdit'] === '1'? true : false;
    });
  }

  onUpdateUsername() {
    this.route.params.subscribe((params: Params) => {
      const id = +params.id;
      this.userService.updateUser({id, name: this.username});
      this.userChangesSaved = true;
    })
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.username);
    console.log(this.user.username);
    if(!this.allowEditUser) {
      return true;
    }
    if(!this.userChangesSaved && (this.username !== this.user.name)) {
      return confirm('you changed username, do wou want discard this?');
    } else {
      return true;
    }
  }
}
