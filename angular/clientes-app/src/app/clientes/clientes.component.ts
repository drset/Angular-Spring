import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ModalService } from './detalle/modal.service';
import Swal from 'sweetalert2';
import {tap} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import {URL_BACKEND} from '../config/config';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  clienteSeleccionado:Cliente;
  urlBackend: string = URL_BACKEND;

  //authService is used to hide buttons in the views based on roles
  constructor(private clienteService: ClienteService,
    public modalService: ModalService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    //subscribe implica que el contenido se refresca solo cuando cambia.

    this.activatedRoute.paramMap.subscribe( params => {
      let page:number = +params.get('page');

      if(!page){
          page = 0;
      }

      this.clienteService.getClientes(page).pipe(
        tap(response => {
          console.log('Tap3');
          (response.content as Cliente[]).forEach(cliente => {
            console.log(cliente.nombre);
          });
        })
      ).subscribe(
        // => es la forma de declarar una funcion anonima.
        response => {
          this.clientes = response.content as Cliente[];
          this.paginador = response;
        }
      );
    }
  );

    this.modalService.notificarUpload.subscribe(cliente => {
      this.clientes = this.clientes.map(clienteOriginal => {
          if(cliente.id == clienteOriginal.id){
            clienteOriginal.foto = cliente.foto;
          }
          return clienteOriginal;
      })
    })
  }

  delete(cliente: Cliente): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `Está seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter( cli => cli !== cliente )
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

  abrirModal(cliente: Cliente){
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }

}
