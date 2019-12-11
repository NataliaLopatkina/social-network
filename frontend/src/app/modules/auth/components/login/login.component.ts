import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/auth.services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    formLogin: FormGroup;
    subscription: Subscription;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.formLogin = this.fb.group({
            email: [ '', [ Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ]],
            password: [ '', [ Validators.required, Validators.min(7) ]]
        })
    }

    login() {
        const userData = { email: this.formLogin.value.email, password: this.formLogin.value.password }
        this.subscription = this.authService.login(userData)
        .subscribe(
            (response)=> {
                this.router.navigate(['/home'])
            },

            (error)=> {
                console.log(error)
            }
        )
    }
}
