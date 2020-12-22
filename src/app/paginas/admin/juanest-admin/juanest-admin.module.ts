import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { JuanestAdminRoutingModule } from './juanest-admin-routing.module';
import { JuanestAdminComponent } from './juanest-admin.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { BebidaComponent } from './components/bebida/bebida.component';
import { PlatoComponent } from './components/plato/plato.component';
import { GuarnicionComponent } from './components/guarnicion/guarnicion.component';
import { HeaderComponent } from '../header/header.component';
import { FormMesaComponent } from './components/mesa/form-mesa/form-mesa.component';
import { FormPlatoComponent } from './components/plato/form-plato/form-plato.component';
import { FormBebidaComponent } from './components/bebida/form-bebida/form-bebida.component';
import { FormGuarnicionComponent } from './components/guarnicion/form-guarnicion/form-guarnicion.component';

//SERVICES
import { MesaService } from './services/mesa.service';
import { PlatoService } from './services/plato.service';
import { BebidaService } from './services/bebida.service';
import { GuarnicionService } from './services/guarnicion.service';


@NgModule({
  declarations: [
    JuanestAdminComponent,
    HeaderComponent,
    MesaComponent,
    BebidaComponent,
    PlatoComponent,
    GuarnicionComponent,
    FormMesaComponent,
    FormPlatoComponent,
    FormBebidaComponent,
    FormGuarnicionComponent
  ],
  imports: [
    CommonModule,
    JuanestAdminRoutingModule,
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
export class JuanestAdminModule { }
