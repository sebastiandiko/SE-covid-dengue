import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe, PROTESIS } from '../../form-steps.component';

@Component({
  selector: 'app-step-ten',
  templateUrl: './step-ten.component.html',
  styleUrls: ['./step-ten.component.scss']
})
export class StepTenComponent {
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
    this.resumen.protesisSeleccionada = this.protesisEnum.RETROAURICULAR;
  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean {
    return this.resumen.protesisSeleccionada === undefined;
  }
}
