import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

import {ClientesService} from './services/clientes.service';

import { ClienteAddComponent } from './components/cliente-add/cliente-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClienteFormComponent,
    ClientListComponent,
    ClienteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
