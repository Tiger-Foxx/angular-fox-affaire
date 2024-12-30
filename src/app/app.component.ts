import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
