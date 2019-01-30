import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExcelPopulateComponent } from "./excel.populate.component";

describe("Excel.PopulateComponent", () => {
  let component: ExcelPopulateComponent;
  let fixture: ComponentFixture<ExcelPopulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelPopulateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
