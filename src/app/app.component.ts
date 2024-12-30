import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {NgForOf} from '@angular/common';
import {DataService} from './data.service';
import {ListeComponent} from './liste/liste.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent, NgForOf, ListeComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit {
  title = 'angular-fox-affaire';


  constructor() {
  }

  ngOnInit(): void {
    console.log('Initialisation du composant...');
  }

}
