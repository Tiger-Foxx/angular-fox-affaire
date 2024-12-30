import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from './article/article.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{
  title = 'angular-fox-affaire';
  constructor() {
  }
  ngOnInit():void {
    console.log('Initialisation du composant...');
  }
}
