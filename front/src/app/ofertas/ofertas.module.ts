import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormOfertasComponent } from './form-ofertas/form-ofertas.component';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './http-mock-request-interceptor.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpMockRequestInterceptor,
    multi: true
  }],
  declarations: [
    FormOfertasComponent,
    ListOfertasComponent
  ],
  exports: [
    FormOfertasComponent,
    ListOfertasComponent
  ]
})
export class OfertasModule { }
