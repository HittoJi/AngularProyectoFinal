import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { IUser } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: IUser={name:"",passwd:""};
  recordar = false;
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.authUser(this.user).subscribe(
      u=>{
        this.user = u;
      },
        e=>console.log(e)
    );    
  }
}