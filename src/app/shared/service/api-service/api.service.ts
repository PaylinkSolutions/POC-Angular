import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  // baseURL: string = environment.baseUrl;
  productsUrl = 'api/products';

  directusEmbarkURL = 'https://assets.paylinksolutions.co.uk/items/'; // embark_content
  directusCompanyURL = 'https://directus.paylinksolutions.co.uk/items/'; // company_content
  directusSubsiderayURL = 'https://directus.paylinksolutions.co.uk/items/'; // subsidary_content
}
