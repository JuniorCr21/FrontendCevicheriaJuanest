import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/cevicheria/juanest/bienvenido', pathMatch: 'full'},
  {path: 'cevicheria/juanest/bienvenido' , component: HomeComponent},
  {path: 'admin/cevicheria/juanest/login' , component: LoginComponent},
  {path: 'cevicheria/juanest/panel/principal', loadChildren: () => import('./paginas/user/juanest/juanest.module').then(m => m.JuanestModule) },
  {path: 'admin/cevicheria/juanest/principal', loadChildren: () => import('./paginas/admin/juanest-admin/juanest-admin.module').then(m => m.JuanestAdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
