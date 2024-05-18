import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TIPOPERDIDA, Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  tipoPerdidaEnum: typeof TIPOPERDIDA = TIPOPERDIDA

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setZona(zn: TIPOPERDIDA) {
    this.resumen.tipoPerdida = zn;
  }

  disabled(): boolean{
    return this.resumen.tipoPerdida === undefined;
  }
}

