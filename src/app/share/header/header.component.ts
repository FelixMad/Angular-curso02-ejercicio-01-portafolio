import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../providers/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit() {
  }

}
