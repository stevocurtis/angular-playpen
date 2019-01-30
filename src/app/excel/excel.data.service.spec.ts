import { TestBed } from '@angular/core/testing';

import { ExcelDataService } from './excel.data.service';

describe('Excel.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelDataService = TestBed.get(ExcelDataService);
    expect(service).toBeTruthy();
  });
});
