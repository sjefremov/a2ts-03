import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { VoteComponent } from './vote.component';
import { TimerComponent } from './timer.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, VoteComponent, TimerComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 


}
