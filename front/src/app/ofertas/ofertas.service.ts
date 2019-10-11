import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { Oferta } from "./ofertas";
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../error.service';
import { HttpResponse } from "selenium-webdriver/http";


@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    //entity_url = environment.REST_API_URL + 'owners';

  private handlerError: HandleError;
  url: string = "http://192.168.1.50:8080";

    constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandler) {
        this.handlerError = httpErrorHandler.createHandleError('OfertasService');


    }

    getOfertas(): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(this.url + "/ofertas");
    }

    saveOferta(oferta: Oferta): Observable<any> {
        return this.httpClient.post(this.url + "/ofertas", oferta);
    }

    updateOferta(oferta: Oferta): Observable<HttpResponse> {
        return this.httpClient.put<HttpResponse>(this.url + "/ofertas/ " + oferta.id, oferta);
    }

    deleteOferta(id: number): Observable<HttpResponse> {
        return this.httpClient.delete<HttpResponse>(this.url + "/ofertas/" + id);
    }

}