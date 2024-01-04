import { Component } from '@angular/core';
import { DatosService } from '../datos.service'; /* esto escrito a mano */

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  constructor(public DatosService: DatosService) {} /* esto escrito a mano */

}
