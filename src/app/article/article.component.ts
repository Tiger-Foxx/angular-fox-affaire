import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-article',
  imports: [
    FormsModule
  ],
  templateUrl: './article.component.html',
  standalone: true,
  styleUrl: './article.component.css'
})
export class ArticleComponent implements  OnInit{

    title:string = 'Article Title';
    price:number=12;
    textAltImg:string="Titre alternatif"
    imgSrc:string="https://via.placeholder.com/400x250";
    totalNbLike:number=0;
    comment: string="";
    constructor() {
    }
    ngOnInit() {
      console.log('Article component initialized');
    }
    onLike(){
      this.totalNbLike++;

    }
}
