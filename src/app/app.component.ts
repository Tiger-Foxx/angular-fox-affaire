import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {NgForOf} from '@angular/common';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent, NgForOf],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit {
  title = 'angular-fox-affaire';
  prix1: number = 7000;
  prix2: number = 5000;
  prix3: number = 2000;
  prix4: number = 8000;
  Message: string;
  liste;


  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
    console.log('Initialisation du composant...');
    this.liste= this.dataService.listeArticles;
  }

  onAffiche(arg: string) {
    return this.Message = "Merci d'avoir Like l'article : " + arg;
  }
}
