import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: any[] = [
    'home', 'about us', 'locations', 'users'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
