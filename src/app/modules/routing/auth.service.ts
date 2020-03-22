import { Subject } from 'rxjs';

export class AuthService {
    private loggedIn = false;
    public loading = new Subject<boolean>();

    isAuthenticated() {
        this.loading.next(true);
        const promise =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
                this.loading.next(false);
            }, 700);
        })
        return promise;
    }

    login() {
        this.loggedIn = true;
        alert('you are logged in');
    }

    logout() {
        this.loggedIn = false;
        alert('you are logged out');
    }
}