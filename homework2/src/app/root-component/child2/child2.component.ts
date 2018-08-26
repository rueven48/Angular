import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component  {
  /**
  * selected_movie
  * this obj came from parent and now its in child2 because he listen to it with input()
  */
  @Input() selected_movie: object  ;
}
