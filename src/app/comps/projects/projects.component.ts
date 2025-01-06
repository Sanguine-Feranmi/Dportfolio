import { Component } from '@angular/core';
import { faCog, faHourglass, faRocket } from '@fortawesome/free-solid-svg-icons';


@Component({

  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  faCog = faCog;
  faHourglass = faHourglass;
  faRocket = faRocket;

}
