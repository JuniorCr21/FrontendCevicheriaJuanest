import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from '../../../../admin/juanest-admin/entities/mesa';
import {MesaService} from '../../../../admin/juanest-admin/services/mesa.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent implements OnInit {

  fechaPedido:String = new Date(Date.now()).toLocaleString();
  mesa:Mesa = new Mesa();

  constructor(private mesaService: MesaService,private router: Router,
    private activesRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarMesa();
  }

  public cargarMesa(){
    this.activesRouter.params.subscribe(
      params=>{
        let id = params['id']
        if(id){
          this.mesaService.getMesa(id).subscribe(
            (mesa) =>{ this.mesa = mesa }
          )
        }
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
