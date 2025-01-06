import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { MyserveComponent } from './comps/home/myserve/myserve.component';
import { PricesComponent } from './comps/home/prices/prices.component';
import { RecommendationComponent } from './comps/home/recommendation/recommendation.component';
import { BlogComponent } from './comps/home/blog/blog.component';
import { ContactComponent } from './comps/contact/contact.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'services', component: MyserveComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
