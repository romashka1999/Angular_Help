import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    userUpdated = new Subject();

    private users: any[] = [
        {
            id: 0,
            name: 'roma'
        },
        {
            id: 1,
            name: 'luka'
        },
        {
            id: 2,
            name: 'elene'
        },
    ];

    getUsers() {
        return this.users.slice();
    }

    getUserById(id: number) {
        return {...this.users[id]};
    }

    updateUser(user: any) {
        console.log(user);
        this.users[user.id].name = user.name;
        this.userUpdated.next('user updated');
    }
}