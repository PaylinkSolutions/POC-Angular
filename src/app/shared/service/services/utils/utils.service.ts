import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  /**
   * Param converts objects into query string
   * @param params takes any list
   * @returns query string
   */
  public paramconverter(params: any): string {
    return (
      '?' +
      Object.keys(params)
        .filter((k): boolean => params[k])
        .map((k): string => k + '=' + params[k])
        .join('&')
    );
  }
}
