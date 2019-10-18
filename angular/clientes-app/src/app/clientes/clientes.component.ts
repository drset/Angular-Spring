import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit() {
    //subscribe implica que el contenido se refresca solo cuando cambia.
    this.clienteService.getClientes().subscribe(
      // => es la forma de declarar una funcion anonima.
      clientes => this.clientes = clientes
    );
  }

}
