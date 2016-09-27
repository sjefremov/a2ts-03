import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    
    @Input() 
    user:any;

    constructor() { }

    ngOnInit() { }
}