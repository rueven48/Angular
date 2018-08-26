import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootComponentComponent } from './root-component/root-component.component';
import { Child1Component } from './root-component/child1/child1.component';
import { Child2Component } from './root-component/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
