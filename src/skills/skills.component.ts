import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  availableOptions = [
      {
      selections: [
          {display: 'SE1', value: 'SE1'},
          {display: 'SE2', value: 'SE2'},
          {display: 'SE3', value: 'SE3'},
          {display: 'Application Architect', value: 'Application Architect'},
          {display: 'Technical Architect', value: 'Technical Architect'},
          {display: 'Enterprise Architect', value: 'Enterprise Architect'}
  ],
      group: 'Software Engineering'
  },

  {
      selections: [
          {display: 'BA1', value: 'BA1'},
          {display: 'BA2', value: 'BA2'},
          {display: 'BA3', value: 'BA3'},
          {display: 'Business Architect', value: 'Business Architect'},
          {display: 'Sr. Business Architect', value: 'Sr. Business Architect'},
          {display: 'Enterprise Business Architect', value: 'Enterprise Business Architect'}
      ],
      group: 'Business Alignment'
  },

  {
      selections: [
          {display: 'IA1', value: 'IA1'},
          {display: 'IA2', value: 'IA2'},
          {display: 'IA3', value: 'IA3'},
          {display: 'Info. Architect', value: 'Info. Architect'},
          {display: 'Sr. Info. Architect', value: 'Sr. Info. Architect'},
          {display: 'Enterprise Info. Architect', value: 'Enterprise Info. Architect'}
      ],
      group: 'Data & Analytics'
  },

  {
      selections: [
          {display: 'PM1', value: 'PM1'},
          {display: 'PM2', value: 'BA2'},
          {display: 'Program Manger', value: 'Program Manger'}
      ],
      group: 'Delivery Optimization'
  }
    ];

    // levels = [
    //   {display: '1-Very Low', value: 'low'},
    //   {display: '2-Basic Capability', value: 'basic'},
    //   {display: '3-Competent', value: 'cpmpetent'},
    //   {display: '4-Developed Skilss', value: 'developed'}
    // ];

    statuses = [
      {display: 'On-Benched', value: 'On-Bench'},
      {display: 'Client-Engaged', value: 'Client-Engaged'},
      ];
    defaultName = 'Skills';

      onSubmit(form) {
        console.log('FORMM', form.value.skill, form.value.role, form.value.status)
      }
}
