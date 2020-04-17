import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
   
    this.userService.getUsers() 
      .subscribe( res => {
        this.userService.users = res;
        console.log(res);
        
        const usersArray = this.userService.users;
        for (let i = 0; i < usersArray.length; i++) {
          if (usersArray[i].birthdate > '1995-01-01') {
            usersArray[i].generation = "Generation Z";
          }
          if (usersArray[i].birthdate > '1981-01-01' && usersArray[i].birthdate < '1994-12-12') {
            usersArray[i].generation = "Millenial";
          }
          if (usersArray[i].birthdate > '1969-01-01' && usersArray[i].birthdate < '1980-12-12') {
            usersArray[i].generation = "Generation X";
          }
          if (usersArray[i].birthdate > '1949-01-01' && usersArray[i].birthdate < '1968-12-12') {
            usersArray[i].generation = "Baby Boom";
          }
          if (usersArray[i].birthdate < '1948-12-12') {
            usersArray[i].generation = "Silent G";
          }
        }

        let millenial = 0;
        let generationSilent = 0;
        let generationX = 0;
        let generationZ = 0;
        let babyBoom = 0;
        for (let i = 0; i < usersArray.length; i++) {
          if (usersArray[i].generation == 'Millenial') {
            millenial++;
          }
          if (usersArray[i].generation == 'Silent G') {
            generationSilent++;
          }
          if (usersArray[i].generation == 'Generation X') {
            generationX++;
          }
          if (usersArray[i].generation == 'Generation Z') {
            generationZ++;
          }
          if (usersArray[i].generation == 'Baby Boom') {
            babyBoom++;
          }
        }
        this.userService.millenial = millenial;
        this.userService.generationSilent = generationSilent;
        this.userService.generationX = generationX;
        this.userService.generationZ = generationZ;
        this.userService.babyBoom = babyBoom;
      });
    }

}
