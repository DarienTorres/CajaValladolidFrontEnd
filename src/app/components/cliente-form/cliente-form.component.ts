import { Component, OnInit } from '@angular/core';
import {ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clientes:any=[];
  constructor(private clientesService:ClientesService) { }

  ngOnInit(){
    this.clientesService.getClientesList().subscribe(
      res => {
        this.clientes=res;
      },
      //res=>console.log(res),
      err=>console.error(err)
    )
    
  }

}