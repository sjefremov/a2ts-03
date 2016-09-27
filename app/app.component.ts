import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    users: any[] = [
        { id: 1, name: 'Name 1', age: 19 },
        { id: 2, name: 'Name 2', age: 19 },
        { id: 3, name: 'Name 3', age: 19 },
        { id: 4, name: 'Name 4', age: 19 },
        { id: 5, name: 'Name 5', age: 19 },

    ];

    constructor() {

    }

}
