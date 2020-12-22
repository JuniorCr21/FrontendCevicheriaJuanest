import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from '../../../../admin/juanest-admin/entities/mesa';
import {MesaService} from '../../../../admin/juanest-admin/services/mesa.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mesa-pedido',
  templateUrl: './mesa-pedido.component.html',
  styleUrls: ['./mesa-pedido.component.css']
})
export class MesaPedidoComponent implements OnInit {

  mesasDisponibles:Mesa[];

  constructor(private mesaService: MesaService,private router: Router) { }

  ngOnInit(): void {
    this.listarMesasDisponibles();
  }

  listarMesasDisponibles(){
    this.mesaService.getMesasForDisponibilidad(1).subscribe(
      mesas =>{
        this.mesasDisponibles=mesas;
        console.log(this.mesasDisponibles);
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
