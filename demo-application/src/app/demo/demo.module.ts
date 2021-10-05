import {NgModule} from "@angular/core";
import {DemoComponent} from "./demo.component";
import {DemoRoutingModule} from "./demo-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {ButtonDemoModule} from "./button/button-demo.module";

@NgModule({
  imports: [
    DemoRoutingModule,
    MatTabsModule,
    ButtonDemoModule,
  ],
  declarations: [
    DemoComponent,
  ]
})
export class DemoModule {
}
