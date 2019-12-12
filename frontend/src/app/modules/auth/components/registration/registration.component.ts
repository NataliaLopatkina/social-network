import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/auth.services';
 
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent implements OnInit {
    formRegistration: FormGroup;
    subscription: Subscription;
    notification: boolean;
    notificationText: string = ''

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.initFormRegistration();
    }

    initFormRegistration() {
        this.formRegistration = this.fb.group({
            firstName: ['Наталья', [ Validators.required ]],
            lastName: ['Лопаткина', [Validators.required]],
            email: [ 'nata.salimowa2015@yandex.ru', [ Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['tosovu96', [Validators.required, Validators.min(7)]],
            dayBirth: ['9', [Validators.required, Validators.min(1), Validators.max(31)]],
            monthBirth: ['Июнь'],
            yearBirth: ['1994', [Validators.required, Validators.min(1915), Validators.max(2005)]]
        })
    }

    register() {
        const user = this.formRegistration.value;
        this.subscription = this.authService.registration(user)
            .subscribe(
                (response: any) => {
                    this.router.navigate(['home/' + user.email])
                },

                (error) => {
                    console.log(error)
                }
            )
    }
}
