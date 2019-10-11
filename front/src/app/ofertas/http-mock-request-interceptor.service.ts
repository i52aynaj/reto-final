import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Oferta } from './ofertas';


@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
         
        console.log('Intercepted httpCall ' + request.url);
        
        if(request.url.endsWith('/ofertas') && request.method === 'GET') {
            return of(new HttpResponse({status: 200, body: [{
                id: 1,
                title: 'Oferta 2x1',
                description: 'Paga 1, llevas 2',
                discount: 50,
                expireDate: new Date()
            }, 
            {
                id: 2,
                title: 'Oferta 3x1',
                description: 'Paga 1, llevas 3',
                discount: 75,
                expireDate: new Date()
            },
            {
                id: 3,
                title: 'Oferta 4x1',
                description: 'Paga 1, llevas 4',
                discount: 90,
                expireDate: new Date()
            }] as Oferta[]}));
        }

        if(request.url.endsWith('/ofertas') && request.body != null && request.method === 'POST') {
            console.log("Entra en post /ofertas");

            return of(new HttpResponse({status: 200, statusText: 'Oferta almacenada' + request.body.title}));
        }

        if(request.url.match('\/ofertas\/\d+$') && request.body != null && request.method === 'PUT') {
            console.log("Entra en put /ofertas");
            return of(new HttpResponse({status: 200, statusText: 'Oferta actualizada'}));
        }

        if(request.url.endsWith('\/ofertas\/\d+$') && request.method === 'DELETE') {
            console.log("Entra en delete /ofertas");
            return of(new HttpResponse({status: 200, statusText: 'Oferta con id ' + request.params.get('id') + ' eliminada'}));
        }

        return next.handle(request);
    }
}