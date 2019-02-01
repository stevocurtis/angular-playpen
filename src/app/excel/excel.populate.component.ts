import { Component, OnInit } from "@angular/core";
import * as XLSXPopulate from "xlsx-populate/browser/xlsx-populate";
import * as FileSaver from "file-saver";
import { ExcelDataService } from "./excel.data.service";

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

// const EXCEL_EXTENSTION = ".xlsx";
const EXCEL_EXTENSTION = ".xls";

@Component({
  selector: "app-excel-populate",
  templateUrl: "./excel.populate.component.html",
  styleUrls: ["./excel.populate.component.css"]
})
export class ExcelPopulateComponent implements OnInit {
  constructor(private _excelDataService: ExcelDataService) {}

  ngOnInit() {}

  downloadViaXLSXPopulate() {
    console.log("user clicked downloadViaXLSXPopulate");
    let start: number = new Date().getTime();

    XLSXPopulate.fromBlankAsync().then(workbook => {
      this.buildSummary(workbook.sheet(0));
      // workbook
      //   .sheet("Sheet1")
      //   .cell("A1")
      //   .value(this._excelDataService.getData());

      // Write to file.
      return workbook.outputAsync().then(blob => {
        console.log(
          "completed exportAsExcelFile in",
          new Date().getTime() - start,
          "ms"
        );
        this.saveAsExcelFile(blob, "xlsx-pop-export");
      });
    });
  }

  buildSummary(summarySheet: XLSXPopulate.Sheet) {
    console.log("buildSummary", summarySheet);
    summarySheet.name("Front Page");
    // summarySheet.column(0).width(30);
    summarySheet.column(0).width(30);
    summarySheet.column(1).width(110);
    summarySheet.column(2).width(128);
    summarySheet.column(3).width(74);
    summarySheet.column(4).width(57);
    summarySheet.column(5).width(147);
    summarySheet.column(6).width(137);
    summarySheet.cell("H1").value("tbc");
    console.log("column 7 width:", summarySheet.column(7).width());
    console.log("column 7:", summarySheet.column(7));
  }

  public saveAsExcelFile(buffer: any, filename: string) {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });

    FileSaver.saveAs(
      data,
      filename + "_export_" + new Date().getTime() + EXCEL_EXTENSTION
    );
  }
}
