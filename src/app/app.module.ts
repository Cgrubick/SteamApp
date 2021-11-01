import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CarouselsComponent } from './Carousels/carousels.component';
import { FootComponent } from './footers/foot.component';
import { GutterComponent } from './gutters/gutter.component';
import { TopNavBarComponent } from './headers/top-nav-bar.component';
import { SearchNavComponent } from './searchnav/search-nav.component';
import { HomeComponent } from './body/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CommunityComponent } from './body/community/community.component';
import { AboutComponent } from './body/about/about.component';
import { SupportComponent } from './body/support/support.component';
import { LoginComponent } from './body/login/login.component';
import { SaleCardsComponent } from './sale-cards/sale-cards.component';
import { StreamCardsComponent } from './stream-cards/stream-cards.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './headers/user-info.component';
import { AccountCreationComponent } from './body/account-creation/account-creation.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';






@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FootComponent,
    CarouselsComponent,
    GutterComponent,
    SearchNavComponent,
    HomeComponent,
    CommunityComponent,
    AboutComponent,
    SupportComponent,
    LoginComponent,
    SaleCardsComponent,
    StreamCardsComponent, 
    UserInfoComponent,
    AccountCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
