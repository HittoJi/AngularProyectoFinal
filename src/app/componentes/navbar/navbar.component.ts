import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
  openSubmenu() {
    let submenu = document.querySelector(".submenu");
    // let x = getComputedStyle(submenu);
    // if (x.display =="none") {
    //   submenu?.setAttribute("style", "display: block;");
    // }else{
    //   submenu?.setAttribute("style", "display: none;");
    // }
    
  }
  closeSubmenu(){
    let submenu= document.querySelector(".submenu");
    submenu?.setAttribute("style", "display: none;");
  }
}
