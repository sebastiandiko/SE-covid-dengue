import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GRADOPERDIDA, Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  gradoPerdidaEnum: typeof GRADOPERDIDA = GRADOPERDIDA

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setPerdida( nivelPerdida: GRADOPERDIDA){
    this.resumen.gradoPerdida = nivelPerdida
  }

  disabled(): boolean{
    return this.resumen.gradoPerdida === undefined;
  }
}
