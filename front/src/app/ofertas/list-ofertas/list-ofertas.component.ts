import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas/ofertas.service';
import { Oferta } from '../ofertas';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {

  private ofertas: Array<Oferta>;

  ofertaTest: Oferta = {
    title: 'Oferta prueba',
    description: 'Oferta prueba descripción',
    discount: 50,
    expireDate: new Date(),
    id: 5
  }


  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertas().subscribe(
      data => this.ofertas = data
      );
  }

  delete(id: string){
    this.ofertasService.deleteOferta(id).subscribe(
      
    );
  }

}
