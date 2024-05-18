import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe, PROTESIS } from '../../form-steps.component';

@Component({
  selector: 'app-step-eleven',
  templateUrl: './step-eleven.component.html',
  styleUrls: ['./step-eleven.component.scss']
})
export class StepElevenComponent {
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
    this.resumen.protesisSeleccionada = this.protesisEnum.INTRAURICULAR;
  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean {
    return this.resumen.protesisSeleccionada === undefined;
  }
}
