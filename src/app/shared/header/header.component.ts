import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navs = [
    {
      name : 'home',
      link : 'home',
      status : 'true',
    },
    {
      name : 'about',
      link : 'about',
      status : 'false',
    },
    {
      name : 'ourpenting',
      link : '#',
      status : 'false'
    },
    {
      name : 'blog',
      link : '#',
      status : 'false'
    },
    {
      name : 'contact us',
      link : '#',
      status : 'false'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
