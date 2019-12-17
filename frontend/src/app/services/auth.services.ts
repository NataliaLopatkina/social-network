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
            localStorage.setItem('user', JSON.stringify(response.user));
            this.isAuth = true;
        }))
    }

    public getToken():string {
        return localStorage.getItem('token')
    }

    public getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
