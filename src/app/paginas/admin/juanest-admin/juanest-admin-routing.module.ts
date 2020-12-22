import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidaComponent } from './components/bebida/bebida.component';
import { FormBebidaComponent } from './components/bebida/form-bebida/form-bebida.component';
import { FormGuarnicionComponent } from './components/guarnicion/form-guarnicion/form-guarnicion.component';
import { GuarnicionComponent } from './components/guarnicion/guarnicion.component';
import { FormMesaComponent } from './components/mesa/form-mesa/form-mesa.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { FormPlatoComponent } from './components/plato/form-plato/form-plato.component';
import { PlatoComponent } from './components/plato/plato.component';

import { JuanestAdminComponent } from './juanest-admin.component';

const routes: Routes = [
  { path: '', component: JuanestAdminComponent,
    children:[
      { path:'mesas',component:MesaComponent },
      { path:'mesas/update',component:MesaComponent },
      { path:'mesas/form',component:FormMesaComponent },
      { path:'mesas/form/:id',component:FormMesaComponent },
      { path:'productos/platos',component:PlatoComponent },
      { path:'productos/platos/update',component:PlatoComponent },
      { path:'productos/platos/form',component:FormPlatoComponent },
      { path:'productos/platos/form/:id',component:FormPlatoComponent },
      { path:'productos/bebidas',component:BebidaComponent },
      { path:'productos/bebidas/update',component:BebidaComponent },
      { path:'productos/bebidas/form',component:FormBebidaComponent },
      { path:'productos/bebidas/form/:id',component:FormBebidaComponent },
      { path:'productos/guarniciones',component:GuarnicionComponent },
      { path:'productos/guarniciones/update',component:GuarnicionComponent },
      { path:'productos/guarniciones/form',component:FormGuarnicionComponent },
      { path:'productos/guarniciones/form/:id',component:FormGuarnicionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuanestAdminRoutingModule { }
