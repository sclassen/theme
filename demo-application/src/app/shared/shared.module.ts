import {NgModule} from '@angular/core';
import {CodeViewerComponent} from "./code-viewer/code-viewer.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {HighlightModule} from "ngx-highlightjs";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    CodeViewerComponent
  ],
  exports: [
    CodeViewerComponent
  ],
  imports: [
    MatExpansionModule,
    HighlightModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
