import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DemoComponent} from "./demo.component";
import {ButtonDemoComponent} from "./button/button-demo.component";

const routes: Routes = [
  {
    path: 'material',
    component: DemoComponent,
    children: [
      {path: '', component: ButtonDemoComponent},
      {path: 'button', component: ButtonDemoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
