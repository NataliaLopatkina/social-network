import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
    user;
    userName: string = '';

    constructor(
        private authService: AuthService) {}

    ngOnInit() {
        this.user = this.authService.getUser();
        this.userName = this.user.firstName + ' ' + this.user.lastName;
    }
}
