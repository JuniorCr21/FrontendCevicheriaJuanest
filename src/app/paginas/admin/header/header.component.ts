import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../components/header/login.service';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.loginService.saveLogin(false);
    this.goto("/cevicheria/juanest/bienvenido");
    swal.fire({
      position: 'center',
      icon: 'success',
      title: "SESIÓN FINALIZADA",
      showConfirmButton: false,
      timer: 1000
    })
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
