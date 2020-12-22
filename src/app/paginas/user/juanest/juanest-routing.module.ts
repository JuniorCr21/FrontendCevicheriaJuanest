import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuanestComponent } from './juanest.component';
import { MesaPedidoComponent } from './components/mesa-pedido/mesa-pedido.component';
import { MesaPagoComponent } from './components/mesa-pago/mesa-pago.component';
import { FormPagoComponent } from './components/form-pago/form-pago.component';
import { FormPedidoComponent } from './components/form-pedido/form-pedido.component';

const routes: Routes = [
  { path: '', component: JuanestComponent,
    children:[
      { path: 'mesas-disponibles', component:MesaPedidoComponent},
      { path: 'mesas-disponibles/:id/form', component:FormPedidoComponent},
      { path: 'cocina/pedidos', component:MesaPedidoComponent},
      { path: 'mesas-pagos', component:MesaPagoComponent},
      { path: 'mesas-pagos/:id/form', component:FormPagoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuanestRoutingModule { }
