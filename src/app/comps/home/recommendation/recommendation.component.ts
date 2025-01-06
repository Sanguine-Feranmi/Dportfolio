import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommendation',
  standalone: false,
  
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {
  faStar = faStar;

  testimonials = [
    {
      stars: 5,
      title: 'Great Quality!',
      text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...',
      name: 'James Gouse',
      role: 'Graphic Designer',
      image: 'pd1.png', 
    },
    {
      stars: 5,
      title: 'Amazing Work!',
      text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...',
      name: 'Tiana Philips',
      role: 'Photographer',
      image: 'pd2.png', 
    },
    {
      stars: 5,
      title: 'Great Quality!',
      text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet...',
      name: 'Talan Westervelt',
      role: 'Business Man',
      image: 'pd3.png', 
    },
  ];
}
