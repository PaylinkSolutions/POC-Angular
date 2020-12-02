import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { ContactUsComponent } from 'src/app/shared/components/contact-us/contact-us.component';

@NgModule({
  declarations: [PageNotFoundComponent, ContactUsComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, PageNotFoundComponent, ContactUsComponent],
})
export class SharedModule {}
