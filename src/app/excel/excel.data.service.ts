import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ExcelDataService {
  private data: any[];
  private maxColumns = 5;
  private maxRows = 10;

  constructor() {
    console.log("building excel data with maxColumns", this.maxColumns, "maxRows", this.maxRows);
    this.buildData();
  }

  private buildData() {
    this.data = [];
    for (let row: number = 1; row <= this.maxRows; row++) {
      let rowData: any[] = [];
      for (let column: number = 1; column <= this.maxColumns; column++) {
        rowData.push(`${row}_${column}`);
      }
      console.log('rowData:', rowData);
      this.data.push(rowData);
    }
  }

  public getData(): any[] {
    return this.data;
  }
}
