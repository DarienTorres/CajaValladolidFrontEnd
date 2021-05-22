import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {cajavalladolid} from '../models/Cliente';
import {cajavalladolid2} from '../models/clientes';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ClientesService {

 // API_URI='http://127.0.0.1:3000/api';

  constructor(private http: HttpClient) { }
/*
  getClientes(){
    return this.http.get('${this.API_URI}/');
  }
  */
  getClientes(){
    return this.http.get('http://localhost:3000/cajavalladolid');
  }

  getCliente(	idClienteCuenta:String){
    return this.http.get('http://localhost:3000/cajavalladolid/${idClienteCuenta}');
  }

  deleteCliente(idClienteCuenta:String){
    return this.http.delete('http://localhost:3000/cajavalladolid/${idClienteCuenta}');
  }

  saveCliente(cliente:cajavalladolid){
    return this.http.post('http://localhost:3000/cajavalladolid',cliente);
  }

  updateCliente(idClienteCuenta:string,updatedCliente:cajavalladolid){
    return this.http.put('http://localhost:3000/cajavalladolid/${idClienteCuenta}',updatedCliente);
  }
  
  getClientesList(){
    return this.http.get('http://localhost:3000/cajavalladolid/clientes/list');
  }

}

