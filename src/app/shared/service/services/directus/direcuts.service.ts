import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Directus, DirectusList } from 'src/app/shared/models/directus.model';
import { APIService } from '../../api-service/api.service';
import { PersistanceService } from '../storage/persistance.service';
import { PersistanceEnum } from 'src/app/shared/models/enum/standard.enum';
import { environment } from 'src/environments/environment';
import { DirectusFilterParams } from 'src/app/shared/models/user.model copy';

@Injectable({
  providedIn: 'root',
})
export class DirecutsService {
  directusList: Directus[] = [];
  selectedComapnyName = 'computershare';

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
  getStaticDirectusContent$(
    pageName: string
  ): Observable<{
    embarkStaticContent$: DirectusList;
    companyStaticContent$: DirectusList;
    subsidaryStaticContent$: DirectusList;
  }> {
    const urlParams: DirectusFilterParams = {
      filter: {
        environment: { _eq: environment.name },
      },
    };
    const subsidaryName = this.selectedSubsidaryName?.split('_')[0];
    const companyName = this.selectedSubsidaryName?.split('_')[1];

    const params = new HttpParams()
      .set('fields', 'page_name,block_name,id,block_content')
      .set('filter', JSON.stringify(urlParams.filter));

    const embarkStaticContent$: Observable<DirectusList> =
      companyName === 'embark'
        ? of({ data: [] } as DirectusList)
        : this.getStaticDirectusObservable$(
            `${this.apiService.directusEmbarkURL}embark`,
            params
          );

    const companyStaticContent$ = this.getStaticDirectusObservable$(
      `${this.apiService.directusCompanyURL}${companyName}`,
      params
    );
    const subsidaryStaticContent$ = this.getStaticDirectusObservable$(
      `${this.apiService.directusSubsiderayURL}${subsidaryName}`,
      params
    );

    return forkJoin({
      embarkStaticContent$,
      companyStaticContent$,
      subsidaryStaticContent$,
    });
  }

  getStaticDirectusObservable$(
    url: string,
    params: HttpParams
  ): Observable<DirectusList> {
    return this.http
      .get<DirectusList>(`${url}_content`, { params })
      .pipe(
        catchError(
          (error: Error): Observable<DirectusList> =>
            of({ data: [] } as DirectusList)
        )
      );
  }

  /**
   * Gets static embark content$
   * @returns static embark content$ Observable
   */
  getStaticEmbarkContent$(): Observable<DirectusList> {
    return this.http.get<DirectusList>(this.apiService.directusEmbarkURL);
  }
}
