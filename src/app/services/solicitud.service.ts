import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';

const solicitudURL = 'https://app-practicas-2022.herokuapp.com/api/auth/solicitud'

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http:HttpClient) { }

  listarSolicitud(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(solicitudURL);
  }
  listarSolicitudId(id: any): Observable<Solicitud> {
    return this.http.get(`${solicitudURL}/${id}`);
  }
  crearSolicitud(data: any): Observable<any> {
    return this.http.post(solicitudURL, data);
  }
  actualizarSolicitud(id: any, data: any): Observable<any> {
    return this.http.put(`${solicitudURL}/${id}`, data);
  }
  eliminarSolicitud(id: any, data: any): Observable<any> {
    return this.http.put(`${solicitudURL}/${id}`, data);
  }
  recuperarSolicitud(id: any, data: any): Observable<any> {
    return this.http.put(`${solicitudURL}/${id}`, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${solicitudURL}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(solicitudURL);
  }
  findByTitle(title: any): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${solicitudURL}?title=${title}`);
  }

}