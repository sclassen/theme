import {NgModule} from "@angular/core";
import {ButtonDemoComponent} from "./button-demo.component";
import {BasicButtonDemoComponent} from "./demo-code/basic-button-demo.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    ButtonDemoComponent,
    BasicButtonDemoComponent
  ]
})
export class ButtonDemoModule {
}
