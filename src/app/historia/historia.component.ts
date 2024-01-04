import { Component } from '@angular/core';
import { DatosService } from '../datos.service'; /* esto escrito a mano */


@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent {

  constructor(public DatosService: DatosService) {} /* esto escrito a mano */
}
