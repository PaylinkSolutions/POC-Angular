import { Pipe, PipeTransform } from '@angular/core';

import { Directus } from 'src/app/shared/models/directus.model';

@Pipe({
  name: 'staticContent',
})
export class StaticContentPipe implements PipeTransform {
  transform(directusList: Directus[], label: string): string {
    return directusList && directusList.length
      ? directusList.find(
          (directus: Directus): boolean => directus.block_name === label
        )?.block_content
      : '';
  }
}
