import { Component, OnInit,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    
   private  _name:string;

    @Input()
    set name(name:string){
        this._name = name && name.trim()|| 'n/a';
    }

    get name(){
        return this._name;
    }

    constructor() { }

    ngOnInit() { }
}