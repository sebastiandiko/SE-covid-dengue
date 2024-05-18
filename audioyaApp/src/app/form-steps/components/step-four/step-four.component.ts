import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ENFERMEDADES, Informe } from '../../form-steps.component';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}
  
  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();

  enfermedadesPreEnum: typeof ENFERMEDADES = ENFERMEDADES

  constructor() {

  }

  ngOnInit(): void {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  setEnfermedades(enfermedad: ENFERMEDADES) {
    this.resumen.enfermedadesPre = enfermedad;
  }

  disabled(): boolean{
    return this.resumen.enfermedadesPre === undefined;
  }
}
