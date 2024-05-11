import { Component, OnInit, ViewChild } from '@angular/core';
import { Security } from '../../models/security';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { indicate } from '../../utils';
import { SecurityService } from '../../services/security.service';
import { SecuritiesFilter } from 'src/app/models/securitiesFilter';
import { FilterCols } from 'src/app/models/securitiesFilter';
import { PageEvent } from '@angular/material/paginator';
import { FILTERSDATA } from '../../mocks/securities-mock';

@Component({
  selector: 'securities-list',
  templateUrl: './securities-list.component.html',
  styleUrls: ['./securities-list.component.scss']
})
export class SecuritiesListComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'type', 'currency', 'isPrivate'];
  
  public securities$: Observable<Security[]>;
  public securitiesFilterLength$: Observable<number>;
  
  public loadingSecurities$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public filterCols: FilterCols[] = FILTERSDATA;
  
  public pageSize = [10, 25, 50, 100];
  public currentPageSize: number = this.pageSize[0];
  public securitiesFilter: SecuritiesFilter = {skip: 0, limit: this.pageSize[0]};

  constructor(private securityService: SecurityService) { }

  /**
   * Method to filter securitiy data
   * @param eventData - The event data
   */

  filterSecurityData(eventData) {
    this.securitiesFilter = { ...this.securitiesFilter, ...eventData };
    this.reloadTableOnChange();
  }

  /**
   * Method to reset the securities filter
   * @param eventData - The event data
   */
  resetFilter(eventData: boolean) {
    if (eventData) {
      this.securitiesFilter = {skip: 0, limit: this.pageSize[0]};
    }
    this.reloadTableOnChange();
  }

  /**
   * Method to reload the table data on change
   */
  reloadTableOnChange() {
    this.securityService.getSecurities(this.securitiesFilter).subscribe({
      next: ({ securities, length }) => {
        this.securities$ = of(securities);
        this.securitiesFilterLength$ = of(length);
      }
    });
  }

  /**
   * Method to handle page change
   * @param e - The page event
   */
  onPageChanged(e: PageEvent) {
    this.currentPageSize = e.pageSize;
    const pageIndex = e.pageIndex;
    this.securitiesFilter = {
      ...this.securitiesFilter,
      skip: pageIndex * e.pageSize,
      limit: (pageIndex + 1) * e.pageSize,
    };
    this.reloadTableOnChange();
  }

  ngOnInit(): void {
    this.reloadTableOnChange();
  }

}
