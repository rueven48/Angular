import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component  {

          movies: object = [{
            'id': 1,
            'movie_name': 'Coraline',
            'price' : '7.13',
            'movie_date': '7/9/2017'
          }, {
            'id': 2,
            'movie_name': 'Finding Dory',
            'price' : '10.09',
            'movie_date': '12/12/2017'
          }, {
            'id': 3,
            'movie_name': 'The Wailing',
            'price' : '10.69',
            'movie_date': '03/09/2017'
        }, {
            'id': 4,
            'movie_name': 'The Void',
            'price' : '8.85',
            'movie_date': '10/30/2017'
        }, {
            'id': 5,
            'movie_name': 'Tower',
            'price' : '8.47',
            'movie_date': '04/06/2017'
        }];

        /**
       * EventEmitter
       * Creates an instance of this class that can deliver events (with the emit method)
       */
       @Output() outPutToParent: EventEmitter<object> = new EventEmitter<object>();

        onClick(movie: object) {
          /**
         * emit - delivers a new event with a parameter
         * the parameter that we sent here (CHILD), can be accessed in the PARENT with the `$event` argument
         */
         this.outPutToParent.emit(movie);
        }
}
