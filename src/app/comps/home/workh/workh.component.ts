import { Component } from '@angular/core';

@Component({
  selector: 'app-workh',
  standalone: false,
  
  templateUrl: './workh.component.html',
  styleUrl: './workh.component.css'
})
export class WorkhComponent {
  edu = [
    {
      university: 'Lead Web Developer',
      degree: 'Certificate of Web Training',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      year: 'Jan 2013 - Dec 2015',
      status: 'Student'
    },
    {
      university: 'Junior Web Developer',
      degree: 'Certificate of Web Training',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      year: 'Jan 2015 - Dec 2019',
      status: 'Student'
    },
    {
      university: 'Senior Web Developer',
      degree: 'Certificate of Web Training',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      year: 'Jan 2019 - Dec 2024',
      status: 'Student'
    },
  ]
}
