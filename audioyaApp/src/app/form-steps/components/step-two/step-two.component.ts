import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GRADOPERDIDA, Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {};

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  gradoPerdidaEnum: typeof GRADOPERDIDA = GRADOPERDIDA;

  constructor() {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setGrado(gr: GRADOPERDIDA) {
    this.resumen.gradoPerdida = gr;
  }

  disabled(): boolean {
    return this.resumen.gradoPerdida === undefined;
  }
}
