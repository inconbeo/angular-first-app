import { Component, OnInit } from '@angular/core';
import { ConsultantsService } from 'consultants/consultants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  consultantsService: ConsultantsService;

  constructor(consultantsService: ConsultantsService) {
    this.consultantsService = consultantsService;

  }

  ngOnInit() {
    this.consultantsService.fetchSkills();
  }
}
