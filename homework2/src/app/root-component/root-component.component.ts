import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent  {

  selected_movie: object;
  /**
  * getMovie
  * because there is outPutToParent listener when value pass and there is emit its excute function getMovie and send parameter
  */
  getMovie(movie: object) {
      this.selected_movie = movie;
  }

}
