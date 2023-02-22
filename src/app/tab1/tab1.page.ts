import { Component } from '@angular/core';
import { Compra } from '../compra.model';
import { OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  listaCompras!: Compra[];
  constructor(private comprasService: ComprasService) {}

  ngOnInit() {
    this.comprasService.getCompras().subscribe((c) => {
      this.listaCompras = c;
    });
  }

  //add onCompra method where we move to new tab
  onCompra(compra: Compra) {
    this.comprasService.addCompra(compra);
  }
}
