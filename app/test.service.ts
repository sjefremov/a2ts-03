import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    
    private users:any[]=[
        {name:'name1'},
        {name:'name2'},
        {name:'name3'},
    ];

    constructor() { }

    addUser(user:any){
        this.users.push(user);
    }

    getAll(){
        return this.users;
    }
}