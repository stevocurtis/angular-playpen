import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ExcelPopulateComponent } from "./excel/excel.populate.component";
import { ExcelModule } from './excel/excel.module';

@NgModule({
  declarations: [AppComponent, ExcelPopulateComponent],
  imports: [BrowserModule, ExcelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
