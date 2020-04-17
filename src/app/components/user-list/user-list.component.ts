import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgxSpinnerService } from "ngx-spinner";

import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public usersService: UsersService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.showUsers();
  }

public modalClose = "";

 editUser1(user: User) {
  this.usersService.selectedUser = user; // primero seleccionamos al invitado
  console.log(user);
}

  editUser(form?: NgForm) {
    console.log(form.value);
      this.usersService.putUser(form.value)
        .subscribe(res => {
          this.showUsers();
        })
        Swal.fire({
          allowOutsideClick: true,
          text: 'The user has been uptated',
          icon: 'success',
          confirmButtonText: 'CONTINUE',
          confirmButtonColor: '#9f6984'
        })
        this.modalClose = 'modal';
  }

  

  showUsers() {
    this.spinner.show();
    this.usersService.getUsers() 
      .subscribe( res => {
        this.usersService.users = res;
        console.log(res);
        this.spinner.hide();
        const usersArray = this.usersService.users;
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
        this.usersService.millenial = millenial;
        this.usersService.generationSilent = generationSilent;
        this.usersService.generationX = generationX;
        this.usersService.generationZ = generationZ;
        this.usersService.babyBoom = babyBoom;
      });
    }
  }

