import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
    user: Object;
    email: string;
    userName: string = '';

    constructor(
        private authService: AuthService,
        private activatedRoute: ActivatedRoute) {
            this.email = this.activatedRoute.snapshot.params['email'];
        }

    ngOnInit() {
        this.authService.getUserData(this.email)
        .subscribe(
            (response)=> {
                console.log(response)
            },
            (error)=> {
                console.log(error)
            }
        )
        this.authService.user.subscribe(
            (user)=> {
                this.user = user;
            }
        )
    }
}
