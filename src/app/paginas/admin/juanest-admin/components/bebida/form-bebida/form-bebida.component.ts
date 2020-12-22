import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Bebida} from '../../../entities/bebida';
import {BebidaService} from '../../../services/bebida.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-bebida',
  templateUrl: './form-bebida.component.html',
  styleUrls: ['./form-bebida.component.css']
})
export class FormBebidaComponent implements OnInit {

  bebida:Bebida = new Bebida();

  constructor(private bebidaService: BebidaService,private router: Router,
    private activesRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarBebida();
  }

  public cargarBebida(){
    this.activesRouter.params.subscribe(
      params=>{
        let id = params['id']
        if(id){
          this.bebidaService.getBebida(id).subscribe(
            (bebida) =>{ this.bebida = bebida }
          )
        }
      }
    )
  }

  crearBebida(){
    this.bebidaService.createBebida(this.bebida).subscribe(
      bebida =>{
        this.goto("../admin/cevicheria/juanest/principal/productos/bebidas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: bebida.nombre + " creada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  actualizarBebida(){
    this.bebidaService.updateBebida(this.bebida).subscribe(
      bebida=>{
        this.goto("../admin/cevicheria/juanest/principal/productos/bebidas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: bebida.nombre + " actualizada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
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
