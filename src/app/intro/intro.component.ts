import { Component } from '@angular/core';
import { DatosService } from '../datos.service'; /* esto escrito a mano */

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  constructor(public DatosService: DatosService) {} /* esto escrito a mano */

}
