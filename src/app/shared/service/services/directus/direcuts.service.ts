import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Directus, DirectusList } from 'src/app/shared/models/directus.model';
import { APIService } from '../../api-service/api.service';
import { PersistanceService } from '../storage/persistance.service';
import { PersistanceEnum } from 'src/app/shared/models/enum/standard.enum';

@Injectable({
  providedIn: 'root',
})
export class DirecutsService {
  directusList: Directus[] = [];
  selectedComapnyName = 'embark';

  constructor(
    private http: HttpClient,
    private apiService: APIService,
    private persistanceService: PersistanceService
  ) {}

  /**
   * Gets selected subsidary name
   */
  get selectedSubsidaryName(): string {
    return this.persistanceService.get(PersistanceEnum.SubsidaryName);
  }

  /**
   * Sets selected subsidary name
   */
  set selectedSubsidaryName(value: string) {
    this.persistanceService.set(PersistanceEnum.SubsidaryName, value);
  }

  /**
   * Gets static directus content$
   * @returns static directus content$ Observable
   */
  getStaticDirectusContent$(): Observable<{
    embarkStaticContent$: DirectusList;
    companyStaticContent$: DirectusList;
    subsidaryStaticContent$: DirectusList;
  }> {
    const embarkStaticContent$: Observable<DirectusList> = this.http
      .get<DirectusList>(`${this.apiService.directusEmbarkURL}embark_content`)
      .pipe(
        catchError(
          (error: Error): Observable<DirectusList> =>
            of({ data: [] } as DirectusList)
        )
      );
    const companyStaticContent$ = this.http
      .get<DirectusList>(
        `${this.apiService.directusCompanyURL}${this.selectedComapnyName}_content`
      )
      .pipe(
        catchError(
          (error: Error): Observable<DirectusList> =>
            of({ data: [] } as DirectusList)
        )
      );
    const subsidaryStaticContent$ = this.http
      .get<DirectusList>(
        `${this.apiService.directusSubsiderayURL}${this.selectedSubsidaryName}_content`
      )
      .pipe(
        catchError(
          (error: Error): Observable<DirectusList> =>
            of({ data: [] } as DirectusList)
        )
      );

    return forkJoin({
      embarkStaticContent$,
      companyStaticContent$,
      subsidaryStaticContent$,
    });
  }

  /**
   * Gets static embark content$
   * @returns static embark content$ Observable
   */
  getStaticEmbarkContent$(): Observable<DirectusList> {
    return this.http.get<DirectusList>(this.apiService.directusEmbarkURL);
  }
}
