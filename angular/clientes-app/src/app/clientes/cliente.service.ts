import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }
  //patron observable para refrescar el contenido automaticamente cuando cambia
  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
}
