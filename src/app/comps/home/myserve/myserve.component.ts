import { Component } from '@angular/core';
import { faArrowRight, faCode, faDesktopAlt, faGamepad, faLaptopCode, faMicrophone, faUserXmark, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myserve',
  standalone: false,
  
  templateUrl: './myserve.component.html',
  styleUrl: './myserve.component.css'
})
export class MyserveComponent {
  title = 'My Services';
  services = [
    {
      name: 'Web Development', 
      desc: 'Blog, E-Commerce.',
      icon: faCode,
    },
    {
      name: 'UI/UX Design', 
      desc: 'MObile App, Website Design',
      icon: faDesktopAlt
    },
    {
      name: 'Sound Design', 
      desc: 'Voice Over, Beat Making',
      icon: faMicrophone
    },
    {
      name: 'Game Design', 
      desc: 'Character Design, Props and Objects',
      icon: faGamepad
    },
    {
      name: 'Photography', 
      desc: 'Portrait, Product Photography',
      icon: faUserXmark
    },
    {
      name: 'Advertisng', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.',
      iconr: faArrowRight,
      btn: 'ORDER NOW',
    },
  ]
}
