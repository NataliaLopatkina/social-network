import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.services';

@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
    user;
    name: string = '';

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.user = this.authService.getUser();
        this.name = this.user.firstName + ' ' + this.user.lastName;
    }

}
