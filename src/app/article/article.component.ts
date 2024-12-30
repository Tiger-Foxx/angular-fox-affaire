import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf, NgStyle, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [
    FormsModule,
    NgIf,
    NgStyle,
    UpperCasePipe
  ],
  templateUrl: './article.component.html',
  standalone: true,
  styleUrl: './article.component.css'
})
export class ArticleComponent implements  OnInit{

    // title:string = 'Article Title';
    // price:number=12;
   @Input() textAltImg:string="Titre alternatif"
   @Input() imgSrc:string="https://via.placeholder.com/400x250";
    totalNbLike:number=0;
    comment: string="";
  @Input() is_dispo: boolean=false;


    @Input() title:string;
    @Input() price:number;
    @Output() info = new EventEmitter<string>()
    constructor() {
    }
    ngOnInit() {
      console.log('Article component initialized');
    }
    onLike(){
      this.totalNbLike++;
      this.info.emit(this.title);
    }

  getColor() {
    return this.is_dispo?'green':'red';
  }
}
