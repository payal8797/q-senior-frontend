import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterableTableComponent } from './components/filterable-table/filterable-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SecuritiesListComponent } from './components/securities-list/securities-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MatInputModule } from '@angular/material/input';
import { InputFilterComponent } from './components/input/input.component';
import { MatSelectModule } from '@angular/material/select';
import { MultiselectFilterComponent } from './components/select/select.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxFilterComponent } from './components/checkbox/checkbox.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    FilterableTableComponent,
    SecuritiesListComponent,
    FilterBarComponent,
    InputFilterComponent,
    MultiselectFilterComponent,
    CheckboxFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
