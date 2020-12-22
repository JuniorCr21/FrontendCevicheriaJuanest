import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Guarnicion} from '../entities/guarnicion';

@Injectable({
  providedIn: 'root'
})
export class GuarnicionService {

  private url:string = 'http://localhost:8085/cevicheria/guarniciones'
  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getGuarniciones(): Observable<Guarnicion[]>{
    return this.http.get<Guarnicion[]>(this.url);
  }

  getGuarnicion(id):Observable<Guarnicion>{
    return this.http.get<Guarnicion>(`${this.url}/${id}`);
  }

  getSearchGuarnicones(nombre):Observable<Guarnicion[]>{
    return this.http.get<Guarnicion[]>(`${this.url}/nombre/${nombre}`)
  }

  getTotalGuarniciones():Observable<number>{
    return this.http.get<number>(`${this.url}/count`);
  }

  createGuarnicion(guarnicion:Guarnicion):Observable<Guarnicion>{
    return this.http.post<Guarnicion>(this.url,guarnicion,{headers:this.httpHeaders})
  }

  updateGuarnicion(guarnicion:Guarnicion):Observable<Guarnicion>{
    return this.http.put<Guarnicion>(`${this.url}/${guarnicion.id}`,guarnicion,{headers: this.httpHeaders});
  }

  updateEstadoGuarnicion(id):Observable<Guarnicion>{
    return this.http.put<Guarnicion>(`${this.url}/estatus/${id}`,{headers: this.httpHeaders});
  }
}
