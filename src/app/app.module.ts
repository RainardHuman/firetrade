import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { DealComponent } from './website/deal/deal.component';
import { LeadComponent } from './website/lead/lead.component';
import { AuthComponent } from './website/auth/auth.component';
import { PageNotFoundComponent } from './website/page-not-found/page-not-found.component';
import { ProfileComponent } from './website/profile/profile.component';
import { DealTableComponent } from './components/deal-table/deal-table.component';
import { DealTableShortComponent } from './components/deal-table-short/deal-table-short.component';
import { LeadCardComponent } from './components/lead-card/lead-card.component';
import { DealViewComponent } from './components/deal-view/deal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DealComponent,
    LeadComponent,
    AuthComponent,
    PageNotFoundComponent,
    ProfileComponent,
    DealTableComponent,
    DealTableShortComponent,
    LeadCardComponent,
    DealViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
