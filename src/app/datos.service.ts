import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  nombre: string = ""; /* Poner "" luego */
  sexo: string = "j"; /* Poner j luego */

  puntos: number = 10; /* poner luego 11 */
  fuerza: number = 0; /* poner luego 0  */
  velocidad: number = 0; /* poner luego 0  */
  punteria: number = 0; /* poner luego 0  */
  percepcion: number = 0; /* poner luego 0  */

  lugar: string = "presentacion";
  dados: boolean = false; /* muestra o no muestra el dado */

  resultado: number = 0; /* resultado de la tirada de los dados */
  exito: boolean = true; /* si el resultado del dado es superior al atributo necesario */
  habilidad: string = ""; /* Esto es necesario por si en un mismo lugar hay dos posibles tiradas */

  coche: boolean = true; /* Si el coche está roto o no */
  tronco: boolean = true; /* El tronco está en medio del camino */
  palo: boolean = false; /* si ha cogido un palo del suelo */
  puerta: boolean = false; /* se ha intentado o se ha tirado la puerta */
  salon: boolean = true; /* si hay bichos en el salón */
  conocimiento: boolean = false; /* esto es si sabe por qué hay bichos gigantes, a partir de aquí puede volver al coche */
  herramientas: boolean = false; /* si ha entrado en la cochera, ha conseguido las herramientas para poder arreglar el coche */

  pasos: number = 0; /* {{DatosService.nombre}pasos */
  horaInicio: Date = new Date();
  duracionMinutos: number = 0;
  duracionSegundos: number = 0;
  tiradas: number[] = [];
  mediaTiradas: number = 0;

  sonidos: boolean = false;
  ambiente = new Audio('assets/sonidos/suspense.ogg');



  respuesta() { /* boton siguiente del dado */
    if (this.lugar == 'historia' && (this.exito == true)) { /* Conduces por el bosque */
      this.lugar = 'roca'
    } /* ves la piedra */
    else if (this.lugar == 'historia' && (this.exito == false)) { /* no ves la piedra */
      this.lugar = 'rocaGolpe1';
      this.coche = false;
    }

    else if (this.lugar == 'roca' && (this.exito == true)) { /* viste la piedra y la esquivas con éxito */
      this.lugar = 'rocaSalvas'
    }
    else if (this.lugar == 'roca' && (this.exito == false)) {
      this.lugar = 'rocaGolpe2';
      this.coche = false;
    }

    else if (this.lugar == 'bosqueIda' && (this.exito == true)) { /* intentas retirar el tronco del camino */
      this.tronco = false;
      this.lugar = 'troncoFuera';
    }
    else if (this.lugar == 'bosqueIda' && (this.exito == false)) {
      this.lugar = 'troncoCamino';
      this.tronco = true;
    }

    else if (this.lugar == 'salon' && (this.exito == true)) {
      this.lugar = 'mantisEsquiva';
      this.salon = false;
    }
    else if (this.lugar == 'salon' && (this.exito == false)) {
      this.lugar = 'mantisAtaca'
    }

    else if (this.lugar == 'mantisAtaca' && (this.exito == true)) {
      this.lugar = 'mantisPartida';
      this.salon = false;
    }
    else if (this.lugar == 'mantisAtaca' && (this.exito == false)) {
      this.lugar = 'mantisAplastada';
      this.salon = false;
    }

    else if (this.lugar == 'volverCoche' && (this.exito == true)) {
      this.lugar = 'obstaculoTronco';
    }
    else if (this.lugar == 'volverCoche' && (this.exito == false)) {
      this.lugar = 'muerte1';
    }

    else if (this.lugar == 'obstaculoTronco' && (this.exito == true)) {
      this.lugar = 'victoria';
    }
    else if (this.lugar == 'obstaculoTronco' && (this.exito == false)) {
      this.lugar = 'muerte2';
    }

    else if ((this.lugar == 'escucha' || this.lugar == 'claroMosquito' || this.lugar == 'puertaRuido') && this.exito == true && this.habilidad == 'fuerza') {
      this.lugar = 'mantisSorprendida';
      this.puerta = true;
    }
    else if ((this.lugar == 'escucha' || this.lugar == 'claroMosquito' || this.lugar == 'puertaRuido') && this.exito == false && this.habilidad == 'fuerza') {
      this.lugar = 'puertaRuido';

      this.puerta = true;
      console.log("es mal")
      console.log(this.habilidad)
    }
    /* 
        else if (this.lugar == 'puertaRuido' || this.lugar == 'escucha'  && this.habilidad == 'fuerza' && this.exito == true) {
          this.lugar = 'mantisSorprendida';
          this.puerta = true;
        }
        else if (this.lugar == 'puertaRuido' || this.lugar == 'escucha'  && this.habilidad == 'fuerza' && this.exito == false) {
          this.lugar = 'puertaRuido';
          this.puerta = true;
        }
     */
    else if (this.lugar == 'mantisSorprendida' && this.exito == true) { /* testear */
      this.lugar = 'cuadro';
      this.salon = false;
    }
    else if (this.lugar == 'mantisSorprendida' && this.exito == false) { /* testear */
      this.lugar = 'mantisAtaca';
    }

    this.tiradas.push(this.resultado);

    this.pasos = this.pasos + 1;
    this.dados = false;
    console.log(this.pasos);
    console.log(this.lugar);
    console.log(this.tiradas);
  }

  siguiente(t: string) {
    this.pasos = this.pasos + 1;
    this.dados = false;
    this.lugar = t;

    if (this.lugar == 'historia') {
      this.sonidos = true
    };
    if (this.lugar == 'bosqueIda') {

      setTimeout(() => {
        this.palo = true
      }, 5000);
    };

    if (this.lugar == 'dormitorio') {
      this.conocimiento = true
    };

    if (this.lugar == 'cochera' && this.coche == false) {
      this.herramientas = true
    }

    if (this.pasos == 1) {
      this.horaInicio = new Date(); /* Para que el tiempo empiece cuando empieza el juego */
    }
    if (this.lugar == "estadisticas") {
      const horaFinal = new Date();
      const segundosTotales = (horaFinal.getTime() - this.horaInicio.getTime()) / 1000;
      console.log("Segundos totales: " + segundosTotales);

      if (segundosTotales > 60) {
        this.duracionMinutos = Math.floor(segundosTotales / 60);
        this.duracionSegundos = Math.floor(segundosTotales - (this.duracionMinutos * 60));
      } else {
        this.duracionSegundos = Math.floor(segundosTotales);
        this.duracionMinutos = 0;
      }

      // media
      let suma = 0;
      for (let i = 0; i < this.tiradas.length; i++) {
        suma = suma + this.tiradas[i];
      }

      this.mediaTiradas =  suma / this.tiradas.length;
    }


    if (this.sonidos == true) {
      this.ambiente.play();
    }

    console.log(this.sonidos)
    console.log(this.lugar)
    console.log(this.pasos)
  }


  tirada(habilidad: string) {
    this.resultado = 0;
    this.dados = true;
    this.habilidad = habilidad;
    setTimeout(() => {
      this.resultado = Math.floor(Math.random() * (6) + 1);

      if (habilidad == "fuerza") {
        this.exito = (this.resultado >= 6 - this.fuerza);
      }
      if (habilidad == "velocidad") {
        this.exito = this.resultado >= 6 - this.velocidad;
      }

      if (habilidad == "punteria") {
        this.exito = this.resultado >= 6 - this.punteria;
      }

      if (habilidad == "percepcion") {
        this.exito = this.resultado >= 6 - this.percepcion;
      }
      /* 
            this.resultado = this.resultado; */

      console.log(this.resultado);
      console.log(this.lugar)
      console.log(this.exito);
      /* console.log(this.lugar) */
    }, 2000);
  }

  cambioSexo(g: string) {
    this.sexo = g;
  }

  atributoF(F: number) {
    if (F == 1 && this.puntos == 0) {
      F = 0;
    } else if (F == 1 && this.fuerza == 4) {
      F = 0;
    } else if (F == -1 && this.puntos == 20) {
      F = 0;
    } else if (F == -1 && this.fuerza == 0) {
      F = 0;
    }
    this.fuerza = this.fuerza + F;
    this.puntos = 10 - this.fuerza - this.velocidad - this.punteria - this.percepcion;
  }
  atributoV(V: number) {
    if (V == 1 && this.puntos == 0) {
      V = 0;
    } else if (V == 1 && this.velocidad == 4) {
      V = 0;
    } else if (V == -1 && this.puntos == 20) {
      V = 0;
    } else if (V == -1 && this.velocidad == 0) {
      V = 0;
    }
    this.velocidad = this.velocidad + V;
    this.puntos = 10 - this.fuerza - this.velocidad - this.punteria - this.percepcion;
  }

  atributoPun(Pun: number) {
    if (Pun == 1 && this.puntos == 0) {
      Pun = 0;
    } else if (Pun == 1 && this.punteria == 4) {
      Pun = 0;
    } else if (Pun == -1 && this.puntos == 20) {
      Pun = 0;
    } else if (Pun == -1 && this.punteria == 0) {
      Pun = 0;
    }
    this.punteria = this.punteria + Pun;
    this.puntos = 10 - this.fuerza - this.velocidad - this.punteria - this.percepcion;
  }

  atributoPer(Per: number) {
    if (Per == 1 && this.puntos == 0) {
      Per = 0;
    } else if (Per == 1 && this.percepcion == 4) {
      Per = 0;
    } else if (Per == -1 && this.puntos == 20) {
      Per = 0;
    } else if (Per == -1 && this.percepcion == 0) {
      Per = 0;
    }
    this.percepcion = this.percepcion + Per;
    this.puntos = 10 - this.fuerza - this.velocidad - this.punteria - this.percepcion;
  }

  alternarSonido() {
    if (this.sonidos == true) {
      this.ambiente.pause();
      this.sonidos = false;
    }
    else {
      this.sonidos = true
      this.ambiente.play();
    }
  }
}
