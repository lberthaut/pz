import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
// import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  //   { path: '**', component: NotFoundComponent }
];
