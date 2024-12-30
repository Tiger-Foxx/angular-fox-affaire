import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ArticleComponent} from '../article/article.component';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-liste',
  imports: [
    ArticleComponent,
    NgFor,
  ],
  templateUrl: './liste.component.html',
  standalone: true,
  styleUrl: './liste.component.css'
})
export class ListeComponent implements  OnInit {
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
