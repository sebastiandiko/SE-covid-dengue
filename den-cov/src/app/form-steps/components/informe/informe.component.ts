import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ImagesProtesis, Informe, PROTESIS } from '../../form-steps.component';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent {
  @Output()
  nextStep = new EventEmitter<any>();

  @Input()
  resumen: Partial<Informe> = {};

  public imagesProtesis: ImagesProtesis[] = [
    {
      protesis: PROTESIS.COCLEAR,
      url: "implantecoclear.jpg"
    },
    {

      protesis: PROTESIS.RETROAURICULAR,
      url: "retroaricular.jpg"
    },
    {
      protesis: PROTESIS.CONDUCCIONOSEA,
      url: "conduccionosea.jpg"
    },
    {
      protesis: PROTESIS.INTRAURICULAR,
      url: "intraauricular.jpg"
    },
    {
      protesis: PROTESIS.INTRACANAL,
      url: "intracanal.jpg"
    },
    {
      protesis: PROTESIS.OIDOMEDIO,
      url: "oidomedio.jpg"
    },
    {
      protesis: PROTESIS.OPENFIT,
      url: "openfit.jpg"
    },
    {
      protesis: PROTESIS.TRONCOENCEFALICO,
      url: "troncoencefalico.jpg"
    },
    {
      protesis: PROTESIS.VARILLAOSEA,
      url: "varillaosea.jpg"
    },
    {
      protesis: PROTESIS.RITE,
      url: "audifonorite.png"
    }
  ];

  constructor() {

  }

  onNextStep() {
    this.nextStep.emit();
  }

  disabled(): boolean {
    return this.resumen.protesisSeleccionada === undefined;
  }

  obtenerUrlImagen() {
    let urlEncontrada = this.imagesProtesis.find(image => image.protesis == this.resumen.protesisSeleccionada)?.url || "";
    return "../../../../assets/images/" + urlEncontrada;
  }

}
