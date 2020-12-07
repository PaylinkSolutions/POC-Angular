import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DirecutsService } from '../../service/services/directus/direcuts.service';

@Component({
  selector: 'app-company-selection',
  templateUrl: './company-selection.component.html',
  styleUrls: ['./company-selection.component.scss'],
})
export class CompanySelectionComponent implements OnInit {
  @Output()
  storeCompanySubsidary: EventEmitter<string> = new EventEmitter<string>();
  embarkData = {
    computershare: [
      'jasper',
      'rosolite',
      'heliodor',
      'melanite',
      'topaz',
      'rosinca',
      'siberite',
      'zephyr',
      'morag',
    ],
    santander: ['my-finances'],
    'rbs-group': ['rbs', 'natwest-loans', 'natwest-cards'],
    embark: ['financial-makeover'],
  };
  companyList: string[];
  subsidaryList: string[];
  selectedCompany: string;
  selectedSubsidary: string;
  storedCompanySubsidary: string;

  constructor(private direcutsService: DirecutsService) {}

  ngOnInit(): void {
    this.companyList = Object.keys(this.embarkData);
    this.storedCompanySubsidary = this.direcutsService.selectedSubsidaryName;
    if (this.storedCompanySubsidary) {
      const subsidaryName = this.storedCompanySubsidary?.split('_')[0];
      const companyName = this.storedCompanySubsidary?.split('_')[1];

      this.selectedCompany = companyName;
      this.subsidaryList = this.embarkData[companyName];
      this.selectedSubsidary = subsidaryName;
    } else {
      this.selectedCompany = 'embark';
      this.subsidaryList = this.embarkData['embark'];
      this.selectedSubsidary = this.embarkData['embark'][0];
    }
  }

  setCompanySelection(company: string): void {
    this.selectedCompany = company;
    this.subsidaryList = this.embarkData[company];
    this.selectedSubsidary = this.embarkData[company][0];
    this.storeCompanySubsidary.emit(
      `${this.selectedSubsidary}_${this.selectedCompany}`
    );
  }

  setSubsidarySelection(subsidary: string): void {
    this.selectedSubsidary = subsidary;
    this.storeCompanySubsidary.emit(
      `${this.selectedSubsidary}_${this.selectedCompany}`
    );
  }
}
