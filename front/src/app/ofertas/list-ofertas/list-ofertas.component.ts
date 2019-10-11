import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas/ofertas.service';
import { Oferta } from '../ofertas';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {

  ofertaTest: Oferta = {
    title: 'Oferta prueba',
    description: 'Oferta prueba descripción',
    discount: 50,
    expireDate: new Date(),
    id: 5
  }

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas().subscribe(console.log);

    // this.ofertasService.saveOferta(this.ofertaTest).subscribe(result => console.log(result));

    // this.ofertasService.updateOferta(this.ofertaTest).subscribe(console.log);
    
    // this.ofertasService.deleteOferta(this.ofertaTest.id).subscribe(console.log);

  }

}
