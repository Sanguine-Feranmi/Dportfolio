import { Component } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-prices',
  standalone: false,
  
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
  faCheck = faCheck;
  faTimes = faTimes;
  pricingPlans = [
    {
      name: 'Silver',
      price: 0,
      frequency: '/Hour',
      description: 'For Most Businesses That Want To Optimize Web Queries',
      features: [
        { name: 'UI Design', available: true },
        { name: 'Web Development', available: true },
        { name: 'Logo Design', available: false },
        { name: 'SEO Optimization', available: false },
        { name: 'WordPress Integration', available: false },
        { name: '5 Websites', available: false },
        { name: 'Unlimited User', available: false },
        { name: '20 GB Bandwidth', available: false },
      ],
      isPopular: false,
      buttonColor: 'gray',
    },
    {
      name: 'Gold',
      price: 50,
      frequency: '/Hour',
      description: 'For Most Businesses That Want To Optimize Web Queries',
      features: [
        { name: 'UI Design', available: true },
        { name: 'Web Development', available: true },
        { name: 'Logo Design', available: true },
        { name: 'SEO Optimization', available: true },
        { name: 'WordPress Integration', available: false },
        { name: '5 Websites', available: false },
        { name: 'Unlimited User', available: false },
        { name: '20 GB Bandwidth', available: false },
      ],
      isPopular: true,
      buttonColor: 'yellow',
    },
    {
      name: 'Diamond',
      price: 80,
      frequency: '/Hour',
      description: 'For Most Businesses That Want To Optimize Web Queries',
      features: [
        { name: 'UI Design', available: true },
        { name: 'Web Development', available: true },
        { name: 'Logo Design', available: true },
        { name: 'SEO Optimization', available: true },
        { name: 'WordPress Integration', available: true },
        { name: '5 Websites', available: true },
        { name: 'Unlimited User', available: true },
        { name: '20 GB Bandwidth', available: true },
      ],
      isPopular: false,
      buttonColor: 'gray',
    },
  ];



}
