import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KefelComponent } from './kefel/kefel.component';
import { PeopleInfoComponent } from './people-info/people-info.component';

@NgModule({
  declarations: [
    AppComponent,
    KefelComponent,
    PeopleInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
