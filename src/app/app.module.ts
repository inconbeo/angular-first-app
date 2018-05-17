import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddConsultantComponent } from 'add-consultants/add-consultant.component';
import { HttpModule } from '@angular/http';
import { AddConsultantService } from 'add-consultants/add-consultant.service';
import { ImportSkillsComponent } from 'import-skills/import-skills.component';
import { HeadersComponent } from 'headers/headers.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from 'home/home.component';
import { ConsultantsComponent } from 'consultants/consultants.component';
import { SkillsComponent } from 'skills/skills.component';
import { ConsultantsService } from 'consultants/consultants.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from 'edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddConsultantComponent,
    ImportSkillsComponent, HeadersComponent,
    HomeComponent,
    SkillsComponent,
    ConsultantsComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule,


  ],
  providers: [ConsultantsService, AddConsultantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
