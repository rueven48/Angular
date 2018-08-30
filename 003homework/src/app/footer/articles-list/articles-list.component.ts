import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/services/show-article.service';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent  {

  articleLists;
  constructor(private myService: ArticleService) {

    this.articleLists = myService.articlesArr;

   }

   sendChosenArticleIndexToService(i) {
     this.myService.currArticleIndex.location = i;
   }
}
