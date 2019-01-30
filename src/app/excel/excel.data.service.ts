import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ExcelDataService {
  public data: any[];
  private maxColumns = 5;
  private maxRows = 10;

  constructor() {
    console.log(
      "building excel data with maxColumns",
      this.maxColumns,
      "maxRows",
      this.maxRows
    );
  }
}
