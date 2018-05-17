import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultantsService {
  private consultants = [];
  user = {firstName: 'Consultant'};
  skills;
  http: Http;
  consultantsChanged = new EventEmitter<any>();
  // editChanged = new EventEmitter<any>();

  constructor(http: Http) {
    this.http = http;
  }

  fetchConsultants() {
   return  this.http.get('http://localhost:8080/consultants')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .subscribe((data) => {
        console.log('fetch consultants data', data)
        this.consultants = data._embedded.consultants.sort((a, b) => {
          return a.firstName.localeCompare(b.firstName)
        });
        this.consultantsChanged.next();
      })
  }

  fetchSkills() {
    return  this.http.get('http://localhost:8080/skills')
       .map((response: Response) => {
         const data = response.json();
         this.skills = data._embedded.skills.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
         return data;
       })
      //  .subscribe((data) => {
      //    console.log('fetch SKILLS data', data)
      //    this.skills = data._embedded.skills.sort((a, b) => {
      //      return a.name.localeCompare(b.name)
      //    });
      //   //  this.consultantsChanged.next();
      //  })
   }

  fetchDelete(consultant) {
    this.consultants.splice(this.consultants.indexOf(consultant), 1);
    return this.http.delete(consultant._links.consultant.href)
              .map((response: Response) => {
                response.json()

              })
              .subscribe((data) => console.log())
  }

  fetchDeleteSkill(skill) {
    this.skills.splice(this.skills.indexOf(skill), 1);
    return this.http.delete(skill._links.self.href)
              .map((response: Response) => {
                response.json()

              })
              .subscribe((data) => console.log())
  }

  getConsultants() {
    return this.consultants;
  }

  getSkills() {
    return this.skills;
  }



  getConsultant() {
    return this.user;
  }

  isEdit(consultant) {
    this.user = consultant;
  }
}
