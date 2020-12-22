import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Plato} from '../../../entities/plato';
import {PlatoService} from '../../../services/plato.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-plato',
  templateUrl: './form-plato.component.html',
  styleUrls: ['./form-plato.component.css']
})
export class FormPlatoComponent implements OnInit {

  plato:Plato = new Plato();

  constructor(private platoService: PlatoService,private router: Router,
    private activesRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPlato();
  }

  public cargarPlato(){
    this.activesRouter.params.subscribe(
      params=>{
        let id = params['id']
        if(id){
          this.platoService.getPlato(id).subscribe(
            (plato) =>{ this.plato = plato }
          )
        }
      }
    )
  }

  crearPlato(){
    this.platoService.createPlato(this.plato).subscribe(
      plato =>{
        this.goto("../admin/cevicheria/juanest/principal/productos/platos");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: "Plato " + plato.nombre + " creado con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  actualizarPlato(){
    this.platoService.updatePlato(this.plato).subscribe(
      plato =>{
        this.goto("../admin/cevicheria/juanest/principal/productos/platos");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: "Plato " + plato.nombre + " actualizado con éxito",
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
