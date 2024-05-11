import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { SECURITIES } from 'src/app/mocks/securities-mock';
import { FilterCols } from 'src/app/models/securitiesFilter';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class MultiselectFilterComponent implements OnInit {
  @Input() filterCols: FilterCols;
  @Input() formGroup: FormGroup;

  multiSelectValues: string[] = [];

  constructor() {}
  
  /**
   * Method to deselect all options in the multi-select
   * @param multiSelect - The MatSelect instance
   */
  deselectAll(multiSelect: MatSelect): void {
    multiSelect.options.forEach((option: MatOption) => option.deselect());
    this.formGroup.get(this.filterCols.name).patchValue([]);
  }
  
  /**
   * Method to check if any filter is selected
   */
  isFilterSelected(){
    return this.formGroup.get(this.filterCols.name)?.value?.length;
  }
  
  ngOnInit(): void {
    const key = this.filterCols.label.toLowerCase();
    this.multiSelectValues = [...new Set(SECURITIES.map(item => item[key]))];
  }
}
