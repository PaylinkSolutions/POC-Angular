import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DirectusList, Directus } from 'src/app/shared/models/directus.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  directusData: Directus[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.directusData = this.route.snapshot.data['directusData'];
  }
}
