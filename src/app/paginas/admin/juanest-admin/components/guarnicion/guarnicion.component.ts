import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Guarnicion} from '../../entities/guarnicion';
import {GuarnicionService} from '../../services/guarnicion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {

  guarniciones:Guarnicion[];
  guarnicion:Guarnicion = new Guarnicion();
  nombre:String="";
  btnMostrarTodo:boolean=false;

  constructor(private guarnicionService: GuarnicionService,private router: Router) { }

  ngOnInit(): void {
    this.listarGuarniciones();
  }

  listarGuarniciones(){
    this.btnMostrarTodo=false;
    this.nombre="";
    this.guarnicionService.getGuarniciones().subscribe(
      guarniciones =>{
        this.guarniciones = guarniciones;
      }
    )
  }

  buscarGuarnicion():void{
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
      this.guarnicionService.getSearchGuarnicones(this.nombre).subscribe(
        guarniciones=>{
          if(guarniciones.length!=0){
            this.btnMostrarTodo=true;
            this.guarniciones=guarniciones;
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

  obtenerGuarnicion(id){
    this.guarnicionService.getGuarnicion(id).subscribe(
      guarnicion => { this.guarnicion = guarnicion }
    )
  }

  cambiarEstadoGuarnicion(id){
    this.guarnicionService.getGuarnicion(id).subscribe(
      guarnicion =>{
        this.guarnicion=guarnicion;
        if(this.guarnicion.estado == true){
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de deshabilitar: ${this.guarnicion.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deshabilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/productos/guarniciones/update");
                this.guarnicionService.updateEstadoGuarnicion(guarnicion.id).subscribe(
                  guarnicion => {
                    this.goto("/admin/cevicheria/juanest/principal/productos/guarniciones");
                    swal.fire(
                    'Deshabilitado!',
                    `${this.guarnicion.nombre} deshabilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/productos/guarniciones");
              }
            })
        }else{
          swal.fire({
            title: '¿Está seguro?',
            text: `Está seguro de habilitar: ${this.guarnicion.nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Habilitar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
              if (result.value) {
                this.goto("/admin/cevicheria/juanest/principal/productos/guarniciones/update")
                this.guarnicionService.updateEstadoGuarnicion(this.guarnicion.id).subscribe(
                  guarnicion => {
                    this.goto("/admin/cevicheria/juanest/principal/productos/guarniciones");
                    swal.fire(
                    'Habilitado!',
                    `${this.guarnicion.nombre} habilitada con éxito`,
                    'success'
                    )
                  }
                )
              }else{
                this.goto("../admin/cevicheria/juanest/principal/productos/guarniciones");
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
