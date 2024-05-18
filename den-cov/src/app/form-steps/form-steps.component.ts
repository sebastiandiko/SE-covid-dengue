import { Component, OnInit } from '@angular/core';

export enum GRADOPERDIDA {
  LEVEMODERADA = 'Leve o Moderada',
  LEVE = 'Leve',
  MODERADA = 'Moderada',
  PROFUNDA = 'Profunda',
  ALTASFRECUENCIAS = 'Altas Frecuencias'
}

export enum TIPOPERDIDA {
  CONDUCTIVA = 'Hipoacusia Conductiva',
  PERCEPTIVA = 'Hipoacusia Perceptiva',
  MIXTA = 'Hipoacusia Mixta'
}

export enum ENFERMEDADES {
  CONGENITAS = 'Congénitas',
  PREEXISTENTES = 'Pre-existentes',
  NO = 'No presenta'
}

export enum TIPOPROTESIS {
  VISIBLE = 'Visible',
  NOVISIBLE = 'No visible'
}

export enum MALFORMACIONES {
  PRESENTAMALFORMACIONES = "Presenta malformaciones",
  NOPRESENTAMALFORMACIONES = "No presenta malformaciones"
}


export enum PROTESIS {
  VARILLAOSEA = "Varilla Osea",
  OPENFIT = "Open Fit",
  RETROAURICULAR = "Retroauricular",
  INTRAURICULAR = "Intrauricular",
  INTRACANAL = "Audífono Intracanal",
  RITE = "Audífono Rite",
  DIADEMASVO = "Diademas VO",
  OIDOMEDIO = "Immplante de Oido Medio",
  COCLEAR = "Immplante Coclear",
  CONDUCCIONOSEA = "Implante de Conducción Ósea",
  TRONCOENCEFALICO = "Implante de Tronco Encefálico"
}

export interface Informe {
  nombre: string;
  edad: number;
  genero: string;
  gradoPerdida: GRADOPERDIDA,
  tipoPerdida: TIPOPERDIDA,
  enfermedadesPre: ENFERMEDADES,
  tipoPro: TIPOPROTESIS,
  malformaciones: MALFORMACIONES,
  protesisSeleccionada: PROTESIS
}


export interface ImagesProtesis {
  url: string;
  protesis: PROTESIS
}

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})
export class FormStepsComponent implements OnInit {

  public step: number = 0;
  public resumen: Partial<Informe> = {
    nombre: '',
    genero: ''
  };

  ngOnInit(): void {
    this.step = 1;
  }

  setNextStep() {
    console.log(this.resumen);
    //gestionamos la logica entre los distintos pasos.
    //paso 3 el camino cambia segun el rango etario y nivel de perdida

    //si el grado es LEVEMODERADA y es menor de edad, vamos al step 4
    if (this.step == 3 && this.resumen.edad && this.resumen.edad < 18 && this.resumen.gradoPerdida == GRADOPERDIDA.LEVEMODERADA) {
      this.step = 4; //saltamos al paso 4
      return;
    }

    //si el grado es LEVEMODERADA y es mayor de edad, vamos al step 5
    if (this.step == 3 && this.resumen.edad && this.resumen.edad >= 18 && this.resumen.gradoPerdida == GRADOPERDIDA.LEVEMODERADA) {
      this.step = 5; //saltamos al paso 5
      return;
    }

    //si el grado es PROFUNDA y es menor o mayor de edad, vamos al step 3
    if (this.step == 3 && this.resumen.gradoPerdida == GRADOPERDIDA.PROFUNDA) {
      this.step = 7; //saltamos al paso 7
      return;
    }

    //en step 4, si hay enfermedades congénitas, vamos al step 8 "DIADEMAS VO"
    if (this.step == 4 && this.resumen.enfermedadesPre == ENFERMEDADES.CONGENITAS) {
      this.step = 8; //saltamos al paso 8
      return;
    }

    // en step 4, si hay enfermedades preexistentes o no hay, vamos al step 10 "RETROAURICULAR"
    if (this.step == 4) {
      this.step = 10; //saltamos al paso 10
      return;
    }

    // en step 5, si es LEVESEVERA vamos al step 6
    if (this.step == 5 && this.resumen.gradoPerdida == GRADOPERDIDA.LEVE) {
      this.step = 6; //saltamos al paso 6
      return;
    }

    // en step 5, si es MODERADA vamos al step 12
    if (this.step == 5 && this.resumen.gradoPerdida == GRADOPERDIDA.MODERADA) {
      this.step = 12; //saltamos al paso 12
      return;
    }

    // en step 5, si es ALTASFRECUENCIAS vamos al step 9
    if (this.step == 5 && this.resumen.gradoPerdida == GRADOPERDIDA.ALTASFRECUENCIAS) {
      this.step = 9; //saltamos al paso 9
      return;
    }

    // en step 6, si es VISIBLE vamos al step 10
    if (this.step == 6 && this.resumen.tipoPro == TIPOPROTESIS.VISIBLE) {
      this.step = 10; //saltamos al paso 10
      return;
    }

    // en step 6, si es NO VISIBLE vamos al step 11
    if (this.step == 6 && this.resumen.tipoPro == TIPOPROTESIS.NOVISIBLE) {
      this.step = 11; //saltamos al paso 11
      return;
    }

    // en step 7, si NO HAY MALFORMACIONES vamos al step 13
    if (this.step == 7 && this.resumen.malformaciones == MALFORMACIONES.NOPRESENTAMALFORMACIONES) {
      this.step = 13; //saltamos al paso 13
      return;
    }

    // en step 7, si HAY MALFORMACIONES vamos al step 14
    if (this.step == 7 && this.resumen.malformaciones == MALFORMACIONES.PRESENTAMALFORMACIONES) {
      this.step = 14; //saltamos al paso 14
      return;
    }


    //si el step es un step final, entonces mostramos el informe
    if ([8, 9, 10, 11, 12, 13, 14].includes(this.step)) {
      this.step = 15;
      return;
    }

    //si es el paso 1 o paso 2, avanzamos al siguiente. cualquier otro caso no hacemos nada porque es un error

    if (this.step == 1) {
      this.step = 2;
      return;
    }

    if (this.step == 2) {
      this.step = 3;
      return;
    }

    //LIMPIAMOS TODO Y REGRESAMOS AL PASO 1
    if (this.step == 15) {
      this.step = 1;
      //limpiamos el resumen
      this.resumen = {
        nombre: '',
        genero: ''
      };
      return;
    }
  }

}
