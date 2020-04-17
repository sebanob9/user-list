import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user = {
    name: '',
    birthdate:''
  }

  constructor(public userService: UsersService) { }

  ngOnInit() {
  }
  
  minDate = new Date(1900, 1, 1); 
  maxDate = new Date(2014, 1, 1);

  addUser(form: NgForm) {
    console.log(form.value);
    this.userService.postUser(form.value)
      .subscribe( res => {
        this.resetForm(form);
        });
      Swal.fire({
        allowOutsideClick: true,
        title: 'Confirmed!',
        text: 'User has been created',
        icon: 'success',
        confirmButtonText: 'CONTINUE',
        confirmButtonColor: '#9f6984'
      })
  }

  resetForm(form?: NgForm) {
    if(form) {
      this.userService.selectedUser = new User();
      form.reset();
    }
  }

}
