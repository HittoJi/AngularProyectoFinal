import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth(user: IUser) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  url='/assets/users.json'

  authUser(user: IUser):Observable<IUser>{
    return this.http.get<IUser>(this.url)
    .pipe(map(u =>{
      if (u.token) {
        localStorage.setItem('token',u.token);
        //this.loguedInfo.next(true)
    }
      return u;
    }));
  }
  isAuth(): boolean{
    if (localStorage.getItem('token')) {
      return true;
    }else{
      return false;
    }
  }
  logOut(){
    localStorage.removeItem('token');
  }
}
