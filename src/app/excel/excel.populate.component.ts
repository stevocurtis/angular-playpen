import { Component, OnInit } from "@angular/core";
import * as XLSXPopulate from "xlsx-populate/browser/xlsx-populate";
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

const EXCEL_EXTENSTION = '.xlsx';

@Component({
  selector: "app-excel-populate",
  templateUrl: "./excel.populate.component.html",
  styleUrls: ["./excel.populate.component.css"]
})
export class ExcelPopulateComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  downloadViaXLSXPopulate() {
    console.log('user clicked downloadViaXLSXPopulate');
    let start: number = new Date().getTime();

    XLSXPopulate.fromBlankAsync()
      .then(workbook => {
        // Modify the workbook.
        workbook.sheet("Sheet1").cell("A1").value('summat');

        // Write to file.
        return workbook.outputAsync()
          .then(blob => {
            console.log('completed exportAsExcelFile in', new Date().getTime() - start, 'ms');
            // this.saveAsExcelFile(blob, excelFileName);
            this.saveAsExcelFile(blob, 'wotever');
          });
      });
  }

  public saveAsExcelFile(buffer: any, filename: string) {

    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });

    FileSaver.saveAs(data, filename + '_export_' + new Date().getTime() + EXCEL_EXTENSTION);
  }
}
