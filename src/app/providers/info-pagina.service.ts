import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../interfaces/info-pagina.interface';
import { EquipoPagina } from '../interfaces/equipo-pagina.inteface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: EquipoPagina;

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://portfolio-c84ef.firebaseio.com/equipo.json')
      .subscribe( (resp: EquipoPagina) => {
        console.log( resp)
        this.equipo = resp;
      })

  }
}
