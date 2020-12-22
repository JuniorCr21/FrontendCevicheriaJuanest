import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Plato} from '../entities/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private url:string = 'http://localhost:8085/cevicheria/platos'
  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getPlatos(): Observable<Plato[]>{
    return this.http.get<Plato[]>(this.url);
  }

  getPlato(id):Observable<Plato>{
    return this.http.get<Plato>(`${this.url}/${id}`);
  }

  getSearchPlatos(nombre):Observable<Plato[]>{
    return this.http.get<Plato[]>(`${this.url}/nombre/${nombre}`)
  }

  getPlatosTipo(tipo):Observable<Plato[]>{
    return this.http.get<Plato[]>(`${this.url}/tipo/${tipo}`)
  }

  getTotalPlatos():Observable<number>{
    return this.http.get<number>(`${this.url}/count`);
  }

  createPlato(plato:Plato):Observable<Plato>{
    return this.http.post<Plato>(this.url,plato,{headers:this.httpHeaders})
  }

  updatePlato(plato:Plato):Observable<Plato>{
    return this.http.put<Plato>(`${this.url}/${plato.id}`,plato,{headers: this.httpHeaders});
  }

  updateEstadoPlato(id):Observable<Plato>{
    return this.http.put<Plato>(`${this.url}/estatus/${id}`,{headers: this.httpHeaders});
  }
}
