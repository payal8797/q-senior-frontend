import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterCols } from 'src/app/models/securitiesFilter';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputFilterComponent {
  @Input() filterCols: FilterCols;
  @Input() formGroup: FormGroup;
}
