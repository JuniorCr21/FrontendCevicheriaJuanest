import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Plato} from '../../entities/plato';
import {PlatoService} from '../../services/plato.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  platos:Plato[];
  plato:Plato = new Plato();
  nombre:String="";
  tipo:String="Todos";
  btnMostrarTodo:boolean=false;

  constructor(private platoService: PlatoService,private router: Router) { }

  ngOnInit(): void {
    this.listarPlatos();
  }

  listarPlatos(){
    this.btnMostrarTodo=false;
    this.nombre="";
    this.platoService.getPlatos().subscribe(
      platos => {
        this.platos = platos;
      }
    )
  }

  listarPorTipo(tipo){
    this.platoService.getPlatosTipo(tipo).subscribe(
      platos=>{
        this.platos=platos;
      }
    )
  }

  buscarPlato():void{
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
      this.platoService.getSearchPlatos(this.nombre).subscribe(
        platos=>{
          if(platos.length!=0){
            this.btnMostrarTodo=true;
            this.platos=platos;
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

  obtenerPlato(id){
    this.platoService.getPlato(id).subscribe(
      plato => { this.plato=plato }
    )
  }

  cambiarEstadoPlato(id){
    this.platoService.getPlato(id).subscribe(
      plato =>{
        this.plato=plato;
        if(this.plato.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: ${this.plato.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/productos/platos/update")
                this.platoService.updateEstadoPlato(this.plato.id).subscribe(
                  plato => {
                    this.goto("/admin/cevicheria/juanest/principal/productos/platos");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.plato.nombre} deshabilitado con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/productos/platos");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: ${this.plato.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/productos/platos/update")
                this.platoService.updateEstadoPlato(this.plato.id).subscribe(
                  mesa => {
                    this.goto("/admin/cevicheria/juanest/principal/productos/platos");
                    swal.fire(
                    'Habilitado!',
                    `${this.plato.nombre} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/productos/platos");
              }

            })
        }
      });
  }

  filtarPorTipo(val:any){
    console.log(val)
    this.tipo = val;
    this.ordenarPorTipo(this.tipo);
  }
  ordenarPorTipo(val:any){
    switch(this.tipo){
      case "Todos":
        this.listarPlatos();
      break;
      case "Ceviche":
        this.listarPorTipo(val);
        break;
      case "Chicharrones":
        this.listarPorTipo(val);
        break;
      case "Sudados":
        this.listarPorTipo(val);
        break;
      case "Arroz":
        this.listarPorTipo(val);
        break;
      case "Frituras":
        this.listarPorTipo(val);
        break;
      case "Sopas y Cremas":
        this.listarPorTipo(val);
        break;
      case "Otros":
        this.listarPorTipo(val);
        break;
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
