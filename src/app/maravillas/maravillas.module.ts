import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillasComponent } from './maravillas.component';
import { MaravillasDetailComponent } from './maravillas-detail/maravillas-detail.component';




@NgModule({
  declarations: [MaravillasComponent,MaravillasDetailComponent],

  imports: [
    CommonModule,
  ],
  exports: [MaravillasComponent]
  
})
export class MaravillasModule { }
