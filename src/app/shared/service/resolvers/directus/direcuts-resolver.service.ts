import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { DirecutsService } from '../../services/directus/direcuts.service';
import { Directus } from 'src/app/shared/models/directus.model';

@Injectable({
  providedIn: 'root',
})
export class DirecutsResolverService implements Resolve<Directus[]> {
  constructor(private direcutsService: DirecutsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Directus[] | import('rxjs').Observable<Directus[]> | Promise<Directus[]> {
    const pageName = state.url.replace('/', '');

    return this.direcutsService.directusList.length
      ? this.filterStaticContent$(pageName)
      : this.getDirectusList$(pageName);
  }

  /**
   * Filters static content$ by page name
   * @param pageName filters data by page name
   * @returns data to that page and environment
   */
  filterStaticContent$(pageName: string): Directus[] {
    return this.direcutsService.directusList.filter(
      (directus: Directus): boolean =>
        directus.page_name === pageName &&
        directus.environment === environment.name
    );
  }

  /**
   * Gets directus list$ from Service and filters data by page name
   * @param pageName filters data by page name
   * @returns directus list$ by page
   */
  getDirectusList$(pageName: string): Observable<Directus[]> {
    return this.direcutsService.getStaticDirectusContent$().pipe(
      map(
        ({
          embarkStaticContent$,
          companyStaticContent$,
          subsidaryStaticContent$,
        }): Directus[] => {
          return [
            ...subsidaryStaticContent$.data,
            ...companyStaticContent$.data,
            ...embarkStaticContent$.data,
          ];
        }
      ),
      map((staticDirectusContent: Directus[]): Directus[] => {
        const directusObject: Directus = {} as Directus;

        this.direcutsService.directusList = staticDirectusContent.filter(
          (directus: Directus): boolean =>
            !directusObject[directus.id] && (directusObject[directus.id] = true)
        );

        return this.filterStaticContent$(pageName);
      }),
      shareReplay(1),
      catchError(
        (error: Error): Observable<Directus[]> => {
          return of([]);
        }
      )
    );
  }
}
