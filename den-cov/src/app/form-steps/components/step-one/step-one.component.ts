import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {

  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {};

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();


  constructor() {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  nextDisabled(): boolean {
    //comparamos si los datos estan vacios, devolvemos disabled = true
    return this.resumen.nombre == "" || this.resumen.edad == null || this.resumen.genero == "";
  }


}
