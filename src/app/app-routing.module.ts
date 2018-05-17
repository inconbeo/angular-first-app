import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImportSkillsComponent } from 'import-skills/import-skills.component';
import { AddConsultantComponent } from 'add-consultants/add-consultant.component';
import { HomeComponent } from 'home/home.component';
import { ConsultantsComponent } from 'consultants/consultants.component';
import { SkillsComponent } from 'skills/skills.component';
import { EditComponent } from 'edit/edit.component';

const routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit', component: EditComponent},
  {path: 'import-consultants', component: ImportSkillsComponent},
  {path: 'consultants', component: ConsultantsComponent},
  {path: 'add-consultant', component: AddConsultantComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes), // register routes in RouterModule provided by Angular
  ],
  // We have to export so it is available to other module
  // if we want to use AppRoutingmodule
  exports: [
    RouterModule
  ]
  })
export class AppRoutingModule {

}
