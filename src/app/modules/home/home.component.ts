import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductResolverService } from './service/product-resolver/product-resolver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: ProductResolverService;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productList = this.route.snapshot.data['productData'];
  }
}
