import { Component } from '@angular/core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-blog',
  standalone: false,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  faArrowCircleRight = faArrowCircleRight;
  blog = [
    {
      image: 'b1.png',
      title: 'How to make web tempates ',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
      btn: 'Learn More',
    },
    {
      image: 'b2.png',
      title: 'Make Business Card',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
      btn: 'Learn More',
    },
    {
      image: 'b3.png',
      title: 'How to make Flyer Designs',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
      btn: 'Learn More',
    },
  ]

}
