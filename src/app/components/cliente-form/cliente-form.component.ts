import { Component, HostBinding, OnInit } from '@angular/core';
import {ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  @HostBinding('class')classes='row';
  clientes:any=[];
  constructor(private clientesService:ClientesService) { }

  ngOnInit(){
    this.getClientesList();
    
  }

  
  deletecliente(id:string){
    console.log(id);
    this.clientesService.deleteCliente(id)
    .subscribe(
      res => {
        console.log(id);
        console.log(res)
        this.getClientesList();

      },
      //res=>console.log(res),
      err=>console.error(err)
    )
  }



  getClientesList() {
    this.clientesService.getClientesList().subscribe(
      res => {
        this.clientes=res;
      },
      //res=>console.log(res),
      err=>console.error(err)
    )
  }

}