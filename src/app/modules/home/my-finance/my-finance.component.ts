import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Directus } from 'src/app/shared/models/directus.model';

@Component({
  selector: 'app-my-finance',
  templateUrl: './my-finance.component.html',
  styleUrls: ['./my-finance.component.scss'],
})
export class MyFinanceComponent implements OnInit {
  directusData: Directus[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.directusData = this.route.snapshot.data['directusData'];
  }
}
