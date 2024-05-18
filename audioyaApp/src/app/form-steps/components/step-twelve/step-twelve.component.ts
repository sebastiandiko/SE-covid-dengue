import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe, PROTESIS } from '../../form-steps.component';

@Component({
  selector: 'app-step-twelve',
  templateUrl: './step-twelve.component.html',
  styleUrls: ['./step-twelve.component.scss']
})
export class StepTwelveComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  public option: string = "";

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  protesisEnum: typeof PROTESIS = PROTESIS

  constructor() {

  }

  ngOnInit(): void {
  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean{
    return this.resumen.protesisSeleccionada === undefined;
  }
}
