import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Mesa} from '../../entities/mesa';
import {MesaService} from '../../services/mesa.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesas:Mesa[];
  mesa:Mesa = new Mesa();
  codigo:String="";
  btnMostrarTodo:Boolean=false;

  constructor(private mesaService: MesaService,private router: Router) { }

  ngOnInit(): void {
    this.listarMesas();
  }

  listarMesas():void{
    this.btnMostrarTodo=false;
    this.codigo="";
    this.mesaService.getMesas().subscribe(
      mesas=>{this.mesas=mesas}
    )
  }

  buscarMesas():void{
    if(this.codigo===""){
      this.codigo="";
      swal.fire({
        position: 'center',
        icon: 'info',
        title: "Ingrese el código por favor",
        showConfirmButton: false,
        timer: 1200
      })
    }else{
      this.mesaService.getSearchMesas(this.codigo).subscribe(
        mesas=>{
          if(mesas.length!=0){
            this.btnMostrarTodo=true;
            this.mesas=mesas;
          }else{
            swal.fire({
              position: 'center',
              icon: 'error',
              title: "Codígo "+this.codigo+" no encontrado",
              showConfirmButton: false,
              timer: 1200
            })
            this.codigo="";
          }
        }
      )
    }
  }

  obtenerMesa(id){
    this.mesaService.getMesa(id).subscribe(
      mesa => { this.mesa=mesa }
    )
  }

  cambiarEstadoMesa(id){
    this.mesaService.getMesa(id).subscribe(
      mesa =>{
        this.mesa=mesa;
        if(this.mesa.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: Mesa ${this.mesa.codigo}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/mesas/update")
                this.mesaService.updateEstadoMesa(this.mesa.id).subscribe(
                  mesa => {
                    this.goto("/admin/cevicheria/juanest/principal/mesas");
                    swal.fire(
                    'Deshabilitado!',
                    `Mesa ${this.mesa.codigo} deshabilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/mesas");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: Mesa ${this.mesa.codigo}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/mesas/update")
                this.mesaService.updateEstadoMesa(this.mesa.id).subscribe(
                  mesa => {
                    this.goto("/admin/cevicheria/juanest/principal/mesas");
                    swal.fire(
                    'Habilitado!',
                    `Mesa ${this.mesa.codigo} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/mesas");
              }

            })
        }
      });
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
