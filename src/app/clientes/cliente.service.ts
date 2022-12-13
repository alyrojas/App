import { Injectable } from '@angular/core';
import { CLIENTE } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
//import { Observable, of } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';

@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeader = new HttpHeaders({'Content-type':'application/json'})
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTE);
    return this.http.get<Cliente[]>(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[])
    );
  }
  create(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeader})
  }

  getCliente(id: any): Observable<Cliente>{

    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }
  update(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente,{headers:this.httpHeader})

  }

  delete(id: number):Observable<Cliente>{

    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeader})
  }

}
