import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Nintindo',
        productCode: 'NIN-0001',
        releaseDate: 'March 19, 2020',
        description: 'Games for everyone. Easy to play.',
        price: 19.95,
        category: 'Gaming',
      },
      {
        id: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2020',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        category: 'Garden',
      },
      {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'Sep 21, 2020',
        description: 'Curved claw steel hammer',
        price: 8.9,
        category: 'Toolbox',
      },
      {
        id: 8,
        productName: 'Play Station',
        productCode: 'GAM-0022',
        releaseDate: 'Oct 15, 2020',
        description: 'Spiderman video game available',
        price: 11.55,
        category: 'Gaming',
      },
      {
        id: 10,
        productName: 'XBOX Controller',
        productCode: 'GMG-0042',
        releaseDate: 'Nov 15, 2020',
        description: 'Standard video game controller',
        price: 35.95,
        category: 'Gaming',
      },
    ];

    return { products };
  }
}
