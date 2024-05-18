import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TIPOPROTESIS, Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  tipoProtesisEnum: typeof TIPOPROTESIS = TIPOPROTESIS

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setTipo( tipoProt: TIPOPROTESIS ){
    this.resumen.tipoPro = tipoProt
  }

  disabled(): boolean{
    return this.resumen.tipoPro === undefined;
  }
}
