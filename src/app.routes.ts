import { Routes } from '@angular/router';
import { HomeComponent } from './app/components';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
