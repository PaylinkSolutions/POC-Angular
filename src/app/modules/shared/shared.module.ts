import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { ContactUsComponent } from 'src/app/shared/components/contact-us/contact-us.component';
import { StaticContentPipe } from 'src/app/shared/pipes/static-content/static-content.pipe';

@NgModule({
  declarations: [PageNotFoundComponent, ContactUsComponent, StaticContentPipe],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    PageNotFoundComponent,
    ContactUsComponent,
    StaticContentPipe
  ],
})
export class SharedModule {}
