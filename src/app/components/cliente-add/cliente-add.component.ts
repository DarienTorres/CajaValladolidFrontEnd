import { Component,HostBinding, OnInit } from '@angular/core';
import {cajavalladolid2} from '../../models/clientes';
import {ClientesService} from '../../services/clientes.service';



@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {
  @HostBinding('class') classes='row';

  cliente:cajavalladolid2={
    idCliente:0,
    nombre:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    rfc:'',
    curp:'',
    fechaAlta:new Date(),
    created_at:new Date(),
  };

  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
  }

  Guardar(){
    delete this.cliente.idCliente;
    delete this.cliente.fechaAlta;
    delete this.cliente.created_at;
    this.clientesService.saveCliente(this.cliente)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>console.error(err)
    )
  }
}
