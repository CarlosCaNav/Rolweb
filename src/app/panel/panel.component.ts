import { Component } from '@angular/core';
import { DatosService } from '../datos.service'; /* esto escrito a mano */

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  constructor(public DatosService: DatosService) {} /* esto escrito a mano */

}
