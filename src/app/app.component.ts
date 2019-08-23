import { Component } from '@angular/core';
import { InfoPaginaService } from '../app/providers/info-pagina.service';
import { ProductosService } from '../app/providers/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  constructor(  public _infoPaginaService: InfoPaginaService,
                public _productosService: ProductosService ){

  } 

}
