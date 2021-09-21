import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './body/about/about.component';
import { CommunityComponent } from './body/community/community.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { SupportComponent } from './body/support/support.component';

const routes: Routes = [
  {path: 'Steam-Home', component: HomeComponent},
  {path: 'steam-support', component: SupportComponent},
  {path: 'steam-about', component: AboutComponent},
  {path: 'steam-login', component: LoginComponent},
  {path: 'steam-community', component: CommunityComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
