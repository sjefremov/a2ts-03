import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { VoteComponent } from './vote.component';
import { TimerComponent } from './timer.component';
import { TestService } from './test.service';
import { AddUserComponent } from './add-user.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    UserComponent,
     VoteComponent,
      TimerComponent,
      AddUserComponent
       ],
  providers:[TestService],
  bootstrap: [ AppComponent ]
})
export class AppModule { 


}
