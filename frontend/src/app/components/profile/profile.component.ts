import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user;
    name: string = '';

    constructor(
        private authService: AuthService) { }

    ngOnInit() {
        
    }

}
