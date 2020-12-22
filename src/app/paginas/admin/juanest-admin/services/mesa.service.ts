import { Injectable } from '@angular/core';
import { Mesa } from '../entities/mesa';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private url:string = 'http://localhost:8085/cevicheria/mesas'
  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMesas(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(this.url);
  }

  getMesasForDisponibilidad(estado): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(`${this.url}/disponibilidad/${estado}`);
  }

  getSearchMesas(codigo):Observable<Mesa[]>{
    return this.http.get<Mesa[]>(`${this.url}/codigo/${codigo}`)
  }

  getMesa(id):Observable<Mesa>{
    return this.http.get<Mesa>(`${this.url}/${id}`);
  }

  getTotalMesas():Observable<number>{
    return this.http.get<number>(`${this.url}/count`);
  }

  createMesa(mesa:Mesa):Observable<Mesa>{
    return this.http.post<Mesa>(this.url,mesa,{headers:this.httpHeaders})
  }
  updateMesa(mesa:Mesa):Observable<Mesa>{
    return this.http.put<Mesa>(`${this.url}/${mesa.id}`,mesa,{headers: this.httpHeaders});
  }

  updateEstadoMesa(id):Observable<Mesa>{
    return this.http.put<Mesa>(`${this.url}/estatus/${id}`,{headers: this.httpHeaders});
  }
}
