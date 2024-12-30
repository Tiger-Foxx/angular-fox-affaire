import { Routes } from '@angular/router';
import {ListeComponent} from './liste/liste.component';
import {DetailComponent} from './detail/detail.component';

export const routes: Routes = [
  {path:"",component:ListeComponent},
  {path:"details",component:DetailComponent}
];
