import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {NgForOf} from '@angular/common';

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
  liste=[
    { id: 1, titre: 'Velo', description: 'Description de l\'article 1', prix: 7000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0g4tX_4eGcJYoU3cCCwwKbPAVWgrVdHAXTQ&s', likes: 10 ,dispo:true},
    { id: 2, titre: 'Fox canap', description: 'Description de l\'article 2', prix: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu19RC3zwAFhH9NmpIVBYOFH4_tePzx5BIA&s', likes: 5,dispo:true },
    { id: 3, titre: 'Super TV fox', description: 'Description de l\'article 3', prix: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyL4GKnYO2vJChXwIbChls_E2xVIxiJmebgg&s', likes: 2,dispo:true },
    { id: 4, titre: 'Fox Phone', description: 'Description de l\'article 4', prix: 8000, image: 'https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj.jpg',dispo: false }
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('Initialisation du composant...');
  }

  onAffiche(arg: string) {
    return this.Message = "Merci d'avoir Like l'article : " + arg;
  }
}
