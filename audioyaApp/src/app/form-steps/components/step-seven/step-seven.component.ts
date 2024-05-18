import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MALFORMACIONES, Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-seven',
  templateUrl: './step-seven.component.html',
  styleUrls: ['./step-seven.component.scss']
})
export class StepSevenComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  malformacionesEnum: typeof MALFORMACIONES = MALFORMACIONES

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setMalformacion( malfor: MALFORMACIONES ){
    this.resumen.malformaciones = malfor
  }

  disabled(): boolean{
    return this.resumen.malformaciones === undefined;
  }
}
