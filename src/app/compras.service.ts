import { Injectable } from '@angular/core';
import { Compra } from './compra.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  comprasArray: Compra[] = [
    new Compra('r1', 'Coca-Cola', 2, 1),
    new Compra('r2', 'Pepsi', 3, 1),
    new Compra('r3', 'Fanta', 1.5, 1),
  ];

  private compraSubject = new BehaviorSubject<Compra[]>(this.comprasArray);

  constructor() {}

  getCompras() {
    return this.compraSubject.asObservable();
  }

  addCompra(compra: Compra) {
    this.comprasArray.push(compra);
    this.compraSubject.next(this.comprasArray);
  }

  getCompra(cursoId: string) {
    return this.comprasArray.find((p) => p.id === cursoId);
  }

  deleteCompra(cursoId: string) {
    this.comprasArray = this.comprasArray.filter((p) => p.id !== cursoId);
    this.compraSubject.next(this.comprasArray);
  }

  updateCantidad(cursoId: string, cantidad: number) {
    const compra = this.comprasArray.find((p) => p.id === cursoId);
    compra!.cantidadComprada = cantidad;
    this.compraSubject.next(this.comprasArray);
  }
}
