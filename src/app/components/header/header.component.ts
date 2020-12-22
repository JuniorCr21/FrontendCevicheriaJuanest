import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario:String="cjuanest20"; usu='';
  contra:String="cjuanest20"; con='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validarForm(usuario,contra){
    if(usuario===this.usuario && contra === this.contra){
      this.goto("/admin/cevicheria/juanest/principal");
    }else{
      this.usu="";
      this.con="";
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
