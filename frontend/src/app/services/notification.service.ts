import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(){}

    public notification = new Subject();

    public addNotification(notificationText: string) {
        this.notification.next({ notification: true, notificationText })
    }

    public deleteNotification() {
        this.notification.next({notification: false })
    }
}
