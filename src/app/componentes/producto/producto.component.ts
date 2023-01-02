import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  constructor(private rutaActiva:ActivatedRoute){
    this.rutaActiva.params.subscribe(parametroID =>{
      console.log(parametroID['id']);

    })
  }
 
  



  }

