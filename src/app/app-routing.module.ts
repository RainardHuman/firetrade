import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AuthComponent } from './website/auth/auth.component';
import { PageNotFoundComponent } from './website/page-not-found/page-not-found.component';
import { ProfileComponent } from './website/profile/profile.component';
import { DealComponent } from './website/deal/deal.component';
import { LeadComponent } from './website/lead/lead.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'deals', component: DealComponent },
  { path: 'leads', component: LeadComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
