import { Component } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
  })

  export class ArticleComponent{

    title : string = 'anguler-basic-exercise';
    content: string = "Some content goes here!! Some content goes here";
    isTechRelated: boolean = false;
    isEmpty: boolean = true;
      
    getColor() {
        return this.isTechRelated === true ? 'blue' : 'yellow';
      }
      toggleTechRelated() {
        this.isTechRelated = !this.isTechRelated;
      }

  }