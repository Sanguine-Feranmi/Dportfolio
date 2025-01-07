import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  edu = [
    {
      university: 'University of Toronto',
      degree: 'Certificate of Web Training',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      year: 'Jan 2017 - Dec 2019',
      status: 'Student'
    },
    {
      university: 'University of Toronto',
      degree: 'Certificate of Web Training',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      year: 'Jan 2017 - Dec 2019',
      status: 'Student'
    },
    {
      university: 'University of Toronto',
      degree: 'Certificate of Web Training',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      year: 'Jan 2017 - Dec 2019',
      status: 'Student'
    },
  ]

}
