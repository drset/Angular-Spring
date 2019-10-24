import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {
  
  private urlEndPoint:string = 'http://localhost:8881/api/clientes';

  constructor(private http: HttpClient) { }
  //patron observable para refrescar el contenido automaticamente cuando cambia
  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
