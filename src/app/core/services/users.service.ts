import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
 
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any = [];
  selectedUser: User;

  readonly URL_API = 'http://hello-world.innocv.com/api/user';

  constructor(private http: HttpClient) {
    this.selectedUser=new User();
   }

  getUsers() {
    return this.http.get(this.URL_API)
      .pipe(
        catchError(this.handleError)
      );
  }

  postUser(user: User) {
    return this.http.post(this.URL_API, user);
  }

  putUser(user: User) {
    return this.http.put(this.URL_API, user);
  }

  deleteUser(_id) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }

  handleError(error: HttpErrorResponse){
    console.log('Request error!')
    return throwError(error);
    }


  // --- GENERATIONS --- //
  millenial: number;
  generationSilent: number;
  generationX: number;
  generationZ: number;
  babyBoom: number;
}


