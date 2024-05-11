import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterCols } from 'src/app/models/securitiesFilter';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})

export class FilterBarComponent implements OnInit {
  @Input() filterCols: FilterCols[] = [];

  @Output() filterValueEvent = new EventEmitter<any>();
  @Output() resetFilterEvent = new EventEmitter<boolean>();

  public formGroup: FormGroup;

  // Inject FormBuilder service in the constructor
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setFormControl(this.filterCols);
  }

  // Method to create reactive form controls based on the filterCols array
  private setFormControl(filterCols: FilterCols[]): void {
    // Initialize the formGroup property as a new FormGroup instance
    this.formGroup = this.formBuilder.group({});

    // Iterate through the filterCols array and add form controls based on the type property
    filterCols.forEach((filter) => {
      if (['input', 'multiselect', 'checkbox'].includes(filter.type)) {
        this.formGroup.addControl(
          filter.name,
          this.formBuilder.control('')
        );
      }
    });

    this.onChangeFilterData();
  }

  // Method to handle form value changes and emit filterValueEvent with updated filters
  private onChangeFilterData() {
    this.formGroup.valueChanges.subscribe(() => {
      const filters = {...this.formGroup.value };

      // Remove keys not included in the filter
      Object.keys(filters).forEach(prop => {
        let value = filters[prop];
        if (typeof value === 'string' && value.trim() === '' || (Array.isArray(value) && value.length === 0)) {
         filters[prop] = null;
        }
      });

      // Emit filterValueEvent if the form is valid
      if (!this.formGroup.invalid) {
        this.filterValueEvent.emit(filters);
      }
    });
  }

  // Method to reset the filter form and emit resetFilterEvent
  resetFilter() {
    this.formGroup.reset();
    this.resetFilterEvent.emit(true);
  }

  // Method to check if any filter is applied
  isFilterApplied(){
    return Object.values(this.formGroup.value).every(value => value === ''|| value === null);
  }
}