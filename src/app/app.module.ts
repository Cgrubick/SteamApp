import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CarouselsComponent } from './Carousels/carousels.component';
import { FootComponent } from './footers/foot.component';
import { GutterComponent } from './gutters/gutter.component';
import { TopNavBarComponent } from './headers/top-nav-bar.component';
import { LayOutComponent } from './layout/layout.component';
import { SearchNavComponent } from './searchnav/search-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FootComponent,
    CarouselsComponent,
    LayOutComponent,
    GutterComponent,
    SearchNavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
