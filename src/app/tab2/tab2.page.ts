import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  compra: any;
  cantidad: number = 1;

  constructor(
    private route: ActivatedRoute,
    private navCNavController: NavController,
    private servicio: ComprasService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.compra = this.servicio.getCompra(paramMap.get('compraId')!);
    });
  }

  onDeleteCompra() {
    this.servicio.deleteCompra(this.compra.id);
    this.navCNavController.navigateBack('/tabs/tab1');
  }

  onLessCompra() {
    this.cantidad = this.cantidad - 1;
    if (this.cantidad < 1) {
      this.cantidad = 1;
      this.servicio.updateCantidad(this.compra.id, this.cantidad);
    }
  }

  onMoreCompra() {
    this.cantidad = this.cantidad + 1;
    this.servicio.updateCantidad(this.compra.id, this.cantidad);
  }
}
