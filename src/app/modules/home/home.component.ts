import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Directus } from 'src/app/shared/models/directus.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  directusData: Directus[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.directusData = this.route.snapshot.data['directusData'];
  }
}
