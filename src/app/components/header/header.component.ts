import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

import {LoginService} from './login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  validarLogin(){
    if(this.loginService.getItem()===true){
      this.goto("/admin/cevicheria/juanest/principal");
      swal.fire({
        position: 'center',
        icon: 'success',
        title: "BIENVENIDO ADMIN",
        showConfirmButton: false,
        timer: 1000
      })
    }else{
      this.goto("/admin/cevicheria/juanest/login");
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
