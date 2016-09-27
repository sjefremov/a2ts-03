import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

 names:any[]=[
     'name 1',
     '  ',
     'name 2'
 ];

 }
