import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    public registration(user: User) {
        return this.httpClient.post(environment.baseUrl + 'registration', user)
    }

    public login(user) {
        const userData = { email: user.email, password: user.password }
        return this.httpClient.post(environment.baseUrl + 'login', userData)
    }
}
