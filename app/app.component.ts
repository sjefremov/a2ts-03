import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    yes:number=0;
    no:number=0;
    onVote(e:boolean){
        e?this.yes++:this.no++;
    }
 questions:any[]=[
     'Question 1',
     'Question 2',
     'Question 3',
     'Question 4',
     'Question 5'
 ];

 }
