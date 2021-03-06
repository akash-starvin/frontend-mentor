import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mode = new FormControl('over');
  navItems = [
    {
      routerLink: 'e-commerce-product-page',
      displayName: 'E-commerce Product Page',
      key: 'e-commerce-product-page',
    },
    {
      routerLink: 'ip-address-tracker',
      displayName: 'IP Address Tracker',
      key: 'ip-address-tracker',
    },
    {
      routerLink: 'job-listing',
      displayName: 'Job Listing Filters',
      key: 'job-listing',
    },
    {
      routerLink: 'todo-app',
      displayName: 'Todo App',
      key: 'todo-app',
    },
    {
      routerLink: 'social-media-dashboard',
      displayName: 'Social Media Dashboard',
      key: 'social-media-dashboard',
    },
    {
      routerLink: 'crowdfunding-product-page',
      displayName: 'Crowdfunding Product Page',
      key: 'crowdfunding-product-page',
    },
    {
      routerLink: 'sunnyside-agency-landing-page',
      displayName: 'Sunnyside Agency Landing Page',
      key: 'sunnyside-agency-landing-page',
    },
    {
      routerLink: 'time-tracking-dashboard',
      displayName: 'Time Tracking Dashboard',
      key: 'time-tracking-dashboard',
    },
    {
      routerLink: 'tip-calculator',
      displayName: 'Tip Calculator',
      key: 'tip-calculator',
    },
  ];
  selectedNav: string = 'todo-app';
  title: string ='frontend-mentor';

  constructor() {}

  ngOnInit() {}

  setNav(key: string) {
    this.selectedNav = key;
  }
}
