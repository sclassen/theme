import {NgModule} from "@angular/core";
import {DemoComponent} from "./demo.component";
import {DemoRoutingModule} from "./demo-routing.module";
import {ButtonDemoComponent} from "./button/button-demo.component";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  imports: [
    DemoRoutingModule,
    MatTabsModule
  ],
  declarations: [
    DemoComponent,
    ButtonDemoComponent
  ]
})
export class DemModule {
}
