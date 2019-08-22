import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//servicios
import { ProductosService } from '../../providers/productos.service';

//Interfaces
import { ProductoPagina } from '../../interfaces/producto-pagina.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  cargando = true;
  producto: ProductoPagina;
  id: string;

  constructor(  private route: ActivatedRoute,
                public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( paramentros => {
        this.productoService.getProducto(paramentros['id'])
          .subscribe( (resp: ProductoPagina) => {
            this.id = paramentros['id'];
            this.producto = resp;
            this.cargando = false;
          });
      })
  }

}
