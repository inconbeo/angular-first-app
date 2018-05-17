import { Component } from '@angular/core';
import { AddConsultantService } from './add-consultant.service';


@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})


export class AddConsultantComponent {
  display = 'none';
  constructor(private addConsultantService: AddConsultantService) {}

  onSubmit(form) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    console.log(form);
    const consultant = {
      firstName: form.value.first,
      lastName: form.value.last,
      email: form.value.email
    }
    this.addConsultantService.addConsultant(consultant).subscribe((data) => {
      if (data) {
        this.display = 'block';
      }
    })
    form.reset();
  }
}
