import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }
  logued: boolean = false;
  ngOnInit(): void {
    this.logued = this.auth.isAuth();
    this.auth.isLogued().subscribe(l => {this.logued = l})
  }
  logout(){
    this.auth.logOut();
    this.logued = false;
  }
  changeText = false;
  // -------------------------------------------
  cambiarNavImg(){
    // Para poder cambiar el tamaño img
    let navlogo = document.querySelector(".navlogo")
    navlogo?.setAttribute("style", "width: 60px;");
    navlogo?.setAttribute("style", "height: 50px;");
    // --------------------------------
  }
  openCatalogo(){
    let catalogo = document.querySelector("#catalogo");
    catalogo?.setAttribute("class","catalogoUl");
  }
  closeCatalogo(){
    let catalogo = document.querySelector("#catalogo");
    catalogo?.setAttribute("class","catalogo"); 
  }
  
}
