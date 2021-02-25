import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth(user: IUser) {
    throw new Error('Method not implemented.');
  }
  private loguedInfo: BehaviorSubject<boolean>;
  constructor(private http: HttpClient, private router: Router) { 
    this.loguedInfo = new BehaviorSubject<boolean>(false);
  }

  url='/assets/users.json'

  authUser(user: IUser):Observable<IUser>{
    return this.http.get<IUser>(this.url)
    .pipe(map(u =>{
      if (u.token) {
        localStorage.setItem('token',u.token);
        this.router.navigate(['/products']);
        this.loguedInfo.next(true)
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
  isLogued(): Observable<boolean>{
    return this.loguedInfo.asObservable()
  }
  
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
