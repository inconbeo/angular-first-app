import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultantsService } from './consultants.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})

export class ConsultantsComponent implements OnInit, OnDestroy  {
  p = 1
  defaultName = '';
  consultants;
  subscription;
  consultantsService: ConsultantsService;

  constructor(consultantsService: ConsultantsService, private router: Router) {
    this.consultantsService = consultantsService;

  }
  onSubmit(form) {
    console.log('CONSULTANT FORM', form.value.name)
  }

  OnRetrieveAll() {
    this.consultantsService.fetchConsultants()
}

onDelete(consultant) {
  console.log('Delete', consultant)
  this.consultantsService.fetchDelete(consultant)
}

onEdit(consultant) {
  // tslint:disable-next-line:no-unused-expression
  // this.router.navigate(['edit']);
  this.consultantsService.isEdit(consultant);

}


  // Once the component is initiated, run the things inside
  ngOnInit () {
    this.subscription = this.consultantsService.consultantsChanged.subscribe(
      () => {
        this.consultants = this.consultantsService.getConsultants();

      }
    )

    this.consultantsService.fetchSkills();

    // this.subscription = this.consultantsService.editChanged.subscribe(
    //   () => {
    //     console.log('edit change is WORKING')
    //     this.router.navigate(['edit']);
    //   }
    // )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
