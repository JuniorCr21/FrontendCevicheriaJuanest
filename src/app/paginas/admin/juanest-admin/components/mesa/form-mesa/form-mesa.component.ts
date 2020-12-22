import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from '../../../entities/mesa';
import {MesaService} from '../../../services/mesa.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-mesa',
  templateUrl: './form-mesa.component.html',
  styleUrls: ['./form-mesa.component.css']
})
export class FormMesaComponent implements OnInit {

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

  crearMesa(){
    this.mesaService.createMesa(this.mesa).subscribe(
      mesa=>{
        this.goto("../admin/cevicheria/juanest/principal/mesas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: "Mesa " + mesa.codigo + " creada con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  actualizarMesa(){
    this.mesaService.updateMesa(this.mesa).subscribe(
      mesa=>{
        this.goto("../admin/cevicheria/juanest/principal/mesas");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: "Mesa " + mesa.codigo + " actualizada con éxito",
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
