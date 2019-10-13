import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Andres', apellido: 'Guzman', email: 'a@a.com', createAt:'2017-12-11' },
    {id: 2, nombre: 'Andres2', apellido: 'Guzman', email: 'a@a.com', createAt:'2017-12-11' },
    {id: 3, nombre: 'Andres3', apellido: 'Guzman', email: 'a@a.com', createAt:'2017-12-11' },
    {id: 4, nombre: 'Andres4', apellido: 'Guzman', email: 'a@a.com', createAt:'2017-12-11' },
    {id: 5, nombre: 'Andres5', apellido: 'Guzman', email: 'a@a.com', createAt:'2017-12-11' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
