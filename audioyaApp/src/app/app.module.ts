import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormStepsComponent } from './form-steps/form-steps.component';
import { StepOneComponent } from './form-steps/components/step-one/step-one.component';
import { StepTwoComponent } from './form-steps/components/step-two/step-two.component';
import { StepThreeComponent } from './form-steps/components/step-three/step-three.component';
import { StepFourComponent } from './form-steps/components/step-four/step-four.component';
import { StepFiveComponent } from './form-steps/components/step-five/step-five.component';
import { StepSixComponent } from './form-steps/components/step-six/step-six.component';
import { StepSevenComponent } from './form-steps/components/step-seven/step-seven.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StepEightComponent } from './form-steps/components/step-eight/step-eight.component';
import { StepNineComponent } from './form-steps/components/step-nine/step-nine.component';
import { StepTenComponent } from './form-steps/components/step-ten/step-ten.component';
import { StepElevenComponent } from './form-steps/components/step-eleven/step-eleven.component';
import { StepTwelveComponent } from './form-steps/components/step-twelve/step-twelve.component';
import { StepThirteenComponent } from './form-steps/components/step-thirteen/step-thirteen.component';
import { StepFouteenComponent } from './form-steps/components/step-fouteen/step-fouteen.component';
import { InformeComponent } from './form-steps/components/informe/informe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormStepsComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    StepSevenComponent,
    FooterComponent,
    HeaderComponent,
    StepEightComponent,
    StepNineComponent,
    StepTenComponent,
    StepElevenComponent,
    StepTwelveComponent,
    StepThirteenComponent,
    StepFouteenComponent,
    InformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
