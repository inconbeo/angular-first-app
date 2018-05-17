import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ConsultantsService } from 'consultants/consultants.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit, OnDestroy {
user = {firstName: ''};
skills;

subscription;
consultantsService: ConsultantsService;
constructor(consultantsService: ConsultantsService) {
  this.consultantsService = consultantsService
}

onAdd(skill) {
  console.log('Added skill', skill)
}

onDelete(skill) {
  console.log('Deleted skill', skill)
  this.consultantsService.fetchDeleteSkill(skill)
}

  ngOnInit() {
    this.user = this.consultantsService.getConsultant();
    this.subscription = this.consultantsService.fetchSkills().subscribe(() => {
      this.skills = this.consultantsService.getSkills();
       console.log('SKILLLLS', this.skills)
    })

  }

  ngOnDestroy() {

  }
}
