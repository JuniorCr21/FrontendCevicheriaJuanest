import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Bebida} from '../../entities/bebida';
import {BebidaService} from '../../services/bebida.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  bebidas:Bebida[];
  bebida:Bebida = new Bebida();
  nombre:String="";
  btnMostrarTodo:boolean=false;

  constructor(private bebidaService: BebidaService,private router: Router) { }

  ngOnInit(): void {
    this.listarBebidas();
  }

  listarBebidas(){
    this.btnMostrarTodo=false;
    this.nombre="";
    this.bebidaService.getBebidas().subscribe(
      bebidas => {
        this.bebidas = bebidas;
      }
    )
  }

  buscarBebida():void{
    if(this.nombre===""){
      this.nombre="";
      swal.fire({
        position: 'center',
        icon: 'info',
        title: "Ingrese el nombre por favor",
        showConfirmButton: false,
        timer: 1200
      })
    }else{
      this.bebidaService.getSearchBebidas(this.nombre).subscribe(
        bebidas=>{
          if(bebidas.length!=0){
            this.btnMostrarTodo=true;
            this.bebidas=bebidas;
          }else{
            swal.fire({
              position: 'center',
              icon: 'error',
              title: this.nombre+" no encontrado",
              showConfirmButton: false,
              timer: 1200
            })
            this.nombre="";
          }
        }
      )
    }
  }

  obtenerBebida(id){
    this.bebidaService.getBebida(id).subscribe(
      bebida => { this.bebida=bebida }
    )
  }

  cambiarEstadoBebida(id){
    this.bebidaService.getBebida(id).subscribe(
      bebida =>{
        this.bebida=bebida;
        if(this.bebida.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: ${this.bebida.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/productos/bebidas/update")
                this.bebidaService.updateEstadoBebida(this.bebida.id).subscribe(
                  bebida => {
                    this.goto("/admin/cevicheria/juanest/principal/productos/bebidas");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.bebida.nombre} deshabilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/productos/bebidas");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: ${this.bebida.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/productos/bebidas/update")
                this.bebidaService.updateEstadoBebida(this.bebida.id).subscribe(
                  mesa => {
                    this.goto("/admin/cevicheria/juanest/principal/productos/bebidas");
                    swal.fire(
                    'Habilitado!',
                    `${this.bebida.nombre} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/productos/bebidas");
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
