import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterCols } from 'src/app/models/securitiesFilter';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxFilterComponent {
  @Input() filterCols: FilterCols;
  @Input() formGroup: FormGroup;
}
