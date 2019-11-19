import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
