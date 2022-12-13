import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
  //styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    //this.clientes = CLIENTE;
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
          );
       }

       delete(cliente: Cliente): void{
       const swalWithBootstrapButtons = Swal.mixin({
     customClass: {
       confirmButton: 'btn btn-success',
       cancelButton: 'btn btn-danger'
     },
     buttonsStyling: false
   })

   swalWithBootstrapButtons.fire({
     title: '¿Esta Seguro?',
     text: `¿Seguro que desea eliminar al cliente? ${cliente.nombre} ${cliente.apellido}`,
     icon: 'warning',
     showCancelButton: true,
     confirmButtonText: 'SI, eliminar',
     cancelButtonText: 'No, cancelar!',
     reverseButtons: true
   }).then((result) => {
     if (result.isConfirmed) {
   this.clienteService.delete(cliente.id).subscribe(
     response =>{
       this.clientes= this.clientes.filter(cli => cli!== cliente)
       swalWithBootstrapButtons.fire(
         'Cliente Eliminado',
         `Cliente ${cliente.nombre} Eliminado con exito`,
         'success'
           )
         }
       )
   }
    })
   }


}
