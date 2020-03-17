import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    
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
        for(let usr of this.users) {
            if(usr.id === user.id) {
                usr = user;
                break;
            }
        }
    }
}