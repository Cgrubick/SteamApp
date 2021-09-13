import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselsComponent } from './Carousels/carousels.component';
import { FootComponent } from './footers/foot.component';
import { TopNavBarComponent } from './headers/top-nav-bar.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FootComponent,
    CarouselsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
