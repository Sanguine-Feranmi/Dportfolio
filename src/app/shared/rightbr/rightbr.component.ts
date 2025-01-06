import { Component } from '@angular/core';
import { faHome, faCode, faUserGraduate, faToolbox, faFeather, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rightbr',
  standalone: false,
  
  templateUrl: './rightbr.component.html',
  styleUrl: './rightbr.component.css'
})
export class RightbrComponent {
  faHome = faHome;
  faCode = faCode;
  
  icons = [
    { 
      name: 'home', 
      icon: faHome,
      routerl:'',
    },
    { 
      name: 'code', 
      icon: faCode,
      routerl:'/services',
    },
    { 
      name: 'user-graduate', 
      icon: faUserGraduate,
      routerl:'/prices',
    },
    { 
      name: 'toolbox', 
      icon: faToolbox,
      routerl:'/recommendation',
    },
    { 
      name: 'feather', 
      icon: faFeather,
      routerl:'/blog', 
    },
    { 
      name: 'message', 
      icon: faMessage,
      routerl:'/contact',
    }
  ]
}