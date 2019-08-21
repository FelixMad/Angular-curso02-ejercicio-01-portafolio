import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosPagina } from '../interfaces/productos-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosPagina[] = [];


  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos(){

    this.http.get('https://portfolio-c84ef.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductosPagina) => {

        this.productos = resp;
        this.cargando = false;

      } )
  }


}
