import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe, PROTESIS } from '../../form-steps.component';

@Component({
  selector: 'app-step-nine',
  templateUrl: './step-nine.component.html',
  styleUrls: ['./step-nine.component.scss']
})
export class StepNineComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  protesisEnum: typeof PROTESIS = PROTESIS

  constructor() {

  }

  ngOnInit(): void {
    this.resumen.protesisSeleccionada = PROTESIS.OPENFIT;
  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean {
    return this.resumen.protesisSeleccionada === undefined;
  }

}
