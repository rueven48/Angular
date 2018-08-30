import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/services/show-article.service';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent {
  chosenArticleIndex: object;
  articlesInfoArr: any;
  constructor(private myService: ArticleService) {

    this.articlesInfoArr = this.myService.articlesArr;

    this.chosenArticleIndex = this.myService.currArticleIndex;

  }


}
