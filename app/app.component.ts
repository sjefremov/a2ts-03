import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    users: any[] = [];
    constructor(private testService: TestService) {

    }

    ngOnInit() {
        this.users = this.testService.getAll();
    }

}
