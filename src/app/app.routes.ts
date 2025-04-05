import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
// import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', component: Notfound404Component },
];
