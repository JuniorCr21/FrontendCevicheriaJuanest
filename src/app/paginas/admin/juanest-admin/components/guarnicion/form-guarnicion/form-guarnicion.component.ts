import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Guarnicion} from '../../../entities/guarnicion';
import {GuarnicionService} from '../../../services/guarnicion.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-guarnicion',
  templateUrl: './form-guarnicion.component.html',
  styleUrls: ['./form-guarnicion.component.css']
})
export class FormGuarnicionComponent implements OnInit {

  guarnicion:Guarnicion = new Guarnicion();

  constructor(private guarnicionService: GuarnicionService,private router: Router,
    private activesRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarGuarnicion();
  }

  crearGuarnicion(){
    this.guarnicionService.createGuarnicion(this.guarnicion).subscribe(
      guarnicion =>{
        this.goto("../admin/cevicheria/juanest/principal/productos/guarniciones");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: guarnicion.nombre + " creado con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  actualizarGuarnicion(){
    this.guarnicionService.updateGuarnicion(this.guarnicion).subscribe(
      guarnicion =>{
        this.goto("../admin/cevicheria/juanest/principal/productos/guarniciones");
        swal.fire({
          position: 'center',
          icon: 'success',
          title: guarnicion.nombre + " actualizado con éxito",
          showConfirmButton: false,
          timer: 1200
        })
      }
    )
  }

  public cargarGuarnicion(){
    this.activesRouter.params.subscribe(
      params=>{
        let id = params['id']
        if(id){
          this.guarnicionService.getGuarnicion(id).subscribe(
            (guarnicion) =>{ this.guarnicion = guarnicion }
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
