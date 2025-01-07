import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftbarComponent } from './shared/leftbar/leftbar.component';
import { RightbrComponent } from './shared/rightbr/rightbr.component';
import { HomeComponent } from './comps/home/home.component';
import { MyserveComponent } from './comps/home/myserve/myserve.component';
import { PricesComponent } from './comps/home/prices/prices.component';
import { RecommendationComponent } from './comps/home/recommendation/recommendation.component';
import { BlogComponent } from './comps/home/blog/blog.component';
import { ContactComponent } from './comps/contact/contact.component';
import { InfosComponent } from './comps/contact/infos/infos.component';
import { HeroComponent } from './comps/home/hero/hero.component';
import { ProjectsComponent } from './comps/projects/projects.component';
import { EducationComponent } from './comps/education/education.component';
import { SkillsComponent } from './comps/skills/skills.component';
import { WorkhComponent } from './comps/home/workh/workh.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    RightbrComponent,
    HomeComponent,
    MyserveComponent,
    PricesComponent,
    RecommendationComponent,
    BlogComponent,
    ContactComponent,
    InfosComponent,
    HeroComponent,
    ProjectsComponent,
    EducationComponent,
    SkillsComponent,
    WorkhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
