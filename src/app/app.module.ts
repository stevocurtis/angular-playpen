import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ExcelPopulateComponent } from "./excel/excel.populate.component";

@NgModule({
  declarations: [AppComponent, ExcelPopulateComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
