import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Informe, PROTESIS } from '../../form-steps.component';

@Component({
  selector: 'app-step-fouteen',
  templateUrl: './step-fouteen.component.html',
  styleUrls: ['./step-fouteen.component.scss']
})
export class StepFouteenComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {}

  @Output()
  resumenChange = new EventEmitter<Partial<Informe>>();


  protesisEnum: typeof PROTESIS = PROTESIS

  public option: string = "";

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
