import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { JuanestRoutingModule } from './juanest-routing.module';
import { JuanestComponent } from './juanest.component';
import { MesaPedidoComponent } from './components/mesa-pedido/mesa-pedido.component';
import { MesaPagoComponent } from './components/mesa-pago/mesa-pago.component';
import { HeaderComponent } from '../header/header.component';


//SERVICIOS
import { MesaService } from '../../admin/juanest-admin/services/mesa.service';
import { PlatoService } from '../../admin/juanest-admin/services/plato.service';
import { BebidaService } from '../../admin/juanest-admin/services/bebida.service';
import { GuarnicionService } from '../../admin/juanest-admin/services/guarnicion.service';
import { FormPagoComponent } from './components/form-pago/form-pago.component';
import { FormPedidoComponent } from './components/form-pedido/form-pedido.component';

@NgModule({
  declarations: [
    JuanestComponent,
    MesaPedidoComponent,
    MesaPagoComponent,
    HeaderComponent,
    FormPagoComponent,
    FormPedidoComponent
  ],
  imports: [
    CommonModule,
    JuanestRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MesaService,
    PlatoService,
    BebidaService,
    GuarnicionService
  ]
})
export class JuanestModule { }
