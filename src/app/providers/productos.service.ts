import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosPagina } from '../interfaces/productos-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosPagina[] = [];
  productosFiltrado: ProductosPagina[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( (resolve, reject) => {
      this.http.get('https://portfolio-c84ef.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductosPagina[]) => {

        this.productos = resp;
        this.cargando = false;
        resolve();

      });
    })

  }

  public getProducto( id: string ){
    return this.http.get(`https://portfolio-c84ef.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto( termino: string ){

    if( this.productos.length === 0 ){

      this.cargarProductos().then( () => {

        this.filtrarProductos( termino );
      });

    }else{
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }
}

