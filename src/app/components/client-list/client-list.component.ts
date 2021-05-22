import { Component, HostBinding, OnInit } from '@angular/core';
import {ClientesService } from '../../services/clientes.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
@HostBinding('class') classes='row';
clients:any=[];

  constructor(private clientesService:ClientesService) { }

  ngOnInit(){
    this.clientesService.getClientes().subscribe(
      res => {
        this.clients=res;
      },
      //res=>console.log(res),
      err=>console.error(err)
    )
    
  }

}
