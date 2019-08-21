import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .subscribe( paramentros => {
        console.log(paramentros);
      })
  }

}
