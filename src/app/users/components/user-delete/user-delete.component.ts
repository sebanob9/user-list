import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

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

