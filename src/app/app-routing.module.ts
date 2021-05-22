import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from './components/client-list/client-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
import {ClienteAddComponent} from './components/cliente-add/cliente-add.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/cajavalladolid',
    pathMatch:'full'
  },
  {
    path:'cajavalladolid',
    component: ClientListComponent
  },
  {
    path:'cajavalladolid/clientes/list',
    component:ClienteFormComponent
  },
  {
    path:'cajavalladolid/clientes/add',
    component:ClienteAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
