import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
    moduleId: module.id,
    selector: 'add-user',
    templateUrl: 'add-user.component.html',
    //providers:[TestService]
})
export class AddUserComponent implements OnInit {
    name:string;
    constructor(private testService:TestService) { }

    ngOnInit() { }

    addUser(){
      this.testService.addUser({name:this.name});  
    }
}