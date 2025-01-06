import { Component } from '@angular/core';
import { faFlag, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-infos',
  standalone: false,
  
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
  info=[
    {
      country: 'USA',
      city: 'New York',
      street: '123 Fifth Avenue',
      email: 'Youremail@gmail.com	',
      phone: '+58 (234) 653 456 7890',
      skype: '@Yourusername',
      telegram : '@Yourusername',
      support: '15369',
      office: '+58 (021) 123 456 7890',
      icon1: faFlag,
      icon2: faMailBulk,
      icon3: faPhone,
    }
  ]
}
