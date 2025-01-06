import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { BlogComponent } from './comps/home/blog/blog.component';
import { ContactComponent } from './comps/contact/contact.component';
import { SkillsComponent } from './comps/skills/skills.component';
import { EducationComponent } from './comps/education/education.component';
import { ProjectsComponent } from './comps/projects/projects.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'pro', component: ProjectsComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'edu', component: EducationComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
