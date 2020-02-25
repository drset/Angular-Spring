import { Injectable } from '@angular/core';
import {formatDate, DatePipe} from '@angular/common'
//import { CLIENTES } from './clientes.json';
import { Region } from './region';
import { Cliente } from './cliente';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AuthService} from '../usuarios/auth.service';
import {URL_BACKEND} from '../config/config';

@Injectable()
export class ClienteService {

  private urlEndPoint:string = URL_BACKEND + '/api/clientes';

  constructor(private http: HttpClient, private router: Router) { }

  getRegiones(): Observable<Region[]>{
    return  this.http.get<Region[]>(this.urlEndPoint + '/regiones' );
  }
  //patron observable para refrescar el contenido automaticamente cuando cambia
  getClientes(page: number): Observable<any> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint + '/page/' + page ).pipe(
      tap((response: any) => {
        //let clientes = response as Cliente[];
        (response.content as Cliente[]).forEach(
          cliente => {
            console.log(cliente.nombre);
          }
        )
      }),
      map((response:any) => {
          //let clientes = response as Cliente[];
          (response.content as Cliente[]).map(cliente => {
           cliente.nombre = cliente.nombre.toUpperCase();
           //let datePipe = new DatePipe('es');
           //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy'); //formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US')clientes.createAt

           return cliente;
         });
         return response;
      }),
      tap(response => {
        (response.content as Cliente[]).forEach(
          cliente => {
            console.log('Tap2');
            console.log(cliente.nombre);
          }
        )
      })
    );
  }

  create(cliente: Cliente) : Observable<Cliente>{
    return this.http.post(this.urlEndPoint, cliente ).pipe(
      map( (response: any) => response.cliente as Cliente),
      catchError(e => {

        if(e.status==400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }


        console.error(e.error.mensaje);

        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if(e.status != 401 && e.error.mensaje){
          this.router.navigate(['/clientes']);
          console.error(e.error.mensaje);
        }


        return throwError(e);

      })
    );
  }

  update(cliente: Cliente) : Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente ).pipe(
      catchError(e => {

        if(e.status==400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }

        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {

        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }

        return throwError(e);
      })
    );
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>>{
    let formData = new FormData();
    formData.append("archivo", archivo );
    formData.append("id", id );

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

}
