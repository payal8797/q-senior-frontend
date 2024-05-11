import { Injectable } from '@angular/core';
import { delay, forkJoin, Observable, of } from "rxjs";
import { Security } from "../models/security";
import { SECURITIES } from "../mocks/securities-mock";
import { SecuritiesFilter } from "../models/securitiesFilter";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  /**
   * Get Securities server request mock
   * */

  getSecurities(securityFilter?: SecuritiesFilter): Observable<{ securities: Security[], length: number }> {
    const filteredSecurities = this.filterSecurities(securityFilter);
  
    const length$ = of(filteredSecurities.length).pipe(delay(1000));
    const securities$ = of(filteredSecurities.slice(securityFilter?.skip ?? 0, securityFilter?.limit ?? 100)).pipe(
      delay(1000)
    );
  
    return forkJoin({ securities: securities$, length: length$ });
  }

  private filterSecurities(securityFilter: SecuritiesFilter) {
    if (!securityFilter) return SECURITIES;

    return SECURITIES.filter(s =>
      (!securityFilter.name || s.name.toLowerCase().includes(securityFilter.name.toLowerCase()))
      && (!securityFilter.types || securityFilter.types.some(type => s.type === type))
      && (!securityFilter.currencies || securityFilter.currencies.some(currency => s.currency == currency))
      && (securityFilter.isPrivate == undefined || securityFilter.isPrivate === s.isPrivate)
    );
  }
}
