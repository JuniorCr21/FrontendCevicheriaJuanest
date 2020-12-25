import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../components/header/login.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-juanest-admin',
  templateUrl: './juanest-admin.component.html',
  styleUrls: ['./juanest-admin.component.css']
})
export class JuanestAdminComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
    if(this.loginService.getItem() === true){

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
