import { Component, OnInit } from '@angular/core';
/* import { Router } from '@angular/router';*/
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UsersService) { }
  
  

  ngOnInit() {
  }

}
