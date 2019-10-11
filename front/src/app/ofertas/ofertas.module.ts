import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './http-mock-request-interceptor.service';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpMockRequestInterceptor,
    multi: true
  }],
  declarations: [
    ListOfertasComponent
  ],
  exports: [
    ListOfertasComponent
  ]
})
export class OfertasModule { }
