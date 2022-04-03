import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navs = [
    {
      name : 'home',
      link : '',
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

}
