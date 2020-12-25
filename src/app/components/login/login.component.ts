import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

import {LoginService} from '../header/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  validarLogin(usuario:HTMLInputElement,contraseña:HTMLInputElement){
    if(usuario.value === "" && contraseña.value === ""){
      swal.fire({
        position: 'center',
        icon: 'info',
        title: "Ingrese usuario y/o contraseña",
        showConfirmButton: false,
        timer: 1200
      })

    }else if(usuario.value === "cjuanest20" && contraseña.value === "cjuanest20"){
      this.loginService.saveLogin(true);
      swal.fire({
        position: 'center',
        icon: 'success',
        title: "BIENVENIDO ADMIN",
        showConfirmButton: false,
        timer: 1000
      })
      this.goto("/admin/cevicheria/juanest/principal");
    }else{
      usuario.value="";
      contraseña.value="";
      swal.fire({
        position: 'center',
        icon: 'error',
        title: "Usuario y/o Contraseña incorrecta",
        showConfirmButton: false,
        timer: 1200
      })
    }
  }

  public goto(url){
    this.router.navigate([url]).then((e) =>{
      if(e){
        console.log("Navigation is successful!");
      }else{
        console.log("Navigation has failed!");
      }
    });
  }

}
