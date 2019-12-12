import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    isAuth: boolean = false;
    user = new Subject();

    constructor(private httpClient: HttpClient) { }

    public registration(user: User) {
        return this.httpClient.post<any>(environment.baseUrl + 'registration', user)
        .pipe(map(response=> {
            localStorage.setItem('token', response.token);
            this.isAuth = true;
        }))
    }

    public login(user) {
        const userData = { email: user.email, password: user.password }
        return this.httpClient.post<any>(environment.baseUrl + 'login', userData)
        .pipe(map(response => {
            localStorage.setItem('token', response.token);
            this.isAuth = true;
            this.user.next(response.user);
        }))
    }

    public getToken():string {
        return localStorage.getItem('token')
    }

    public getUserData(email) {
        const params = email;
        return this.httpClient.get(environment.baseUrl + 'user', {params});
    }
}
