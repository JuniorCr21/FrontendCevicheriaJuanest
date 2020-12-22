import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from '../../../../admin/juanest-admin/entities/mesa';
import {MesaService} from '../../../../admin/juanest-admin/services/mesa.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mesa-pago',
  templateUrl: './mesa-pago.component.html',
  styleUrls: ['./mesa-pago.component.css']
})
export class MesaPagoComponent implements OnInit {

  mesasPagos:Mesa[];

  constructor(private mesaService: MesaService,private router: Router) { }

  ngOnInit(): void {
    this.listarMesasPagos();
  }

  listarMesasPagos(){
    this.mesaService.getMesasForDisponibilidad(0).subscribe(
      mesas =>{
        this.mesasPagos=mesas;
        console.log(this.mesasPagos);
      }
    )
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
