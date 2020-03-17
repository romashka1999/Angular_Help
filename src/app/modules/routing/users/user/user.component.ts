import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit, OnDestroy {

  sub: Subscription;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.user = this.usersService.getUserById(id);

    this.sub = this.route.params.subscribe( (params: Params) => {
      const id = +params.id;
      this.user = this.usersService.getUserById(id);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEditUser() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
