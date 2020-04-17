import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgxSpinnerService } from "ngx-spinner";
/* import { ThrowStmt } from '@angular/compiler'; */
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(public userService: UsersService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.spinner.show();
    this.userService.getUsers() 
      .subscribe( res => {
        this.userService.users = res;
        console.log(res);
        this.spinner.hide();
      });
    }

/*   editUser(form: NgForm) {
    console.log(form.value);
      this.userService.putUser(form.value)
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
  } */

    
  deleteUser(id: string) {
          Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9f6984',
            cancelButtonColor: '#ba4646',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire('User deleted!');
              this.userService.deleteUser(id)
                .subscribe(res => {
                this.showUsers();
                })
        }  
      });
}


minDate = new Date(1900, 1, 1); 
maxDate = new Date(2014, 1, 1);

status: boolean = false;
isReadOnly: boolean = true;

isDisabled() {
  this.status = !this.status;
  this.isReadOnly = !this.isReadOnly;
  }

}

