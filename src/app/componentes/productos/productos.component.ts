import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  productos:any = [];
  //CREO UNA INSTANACIA DEL SERIVICO PARA PODER USAR SU METODO
 constructor(private productosService:ProductosService,
            private ruta:Router){


 }

 ngOnInit(): void {
   this.productosService.obteberTodosLosProductos().subscribe(data =>{
    //console.log(data);
    this.productos = data;
    console.log(this.productos);
   })
 }

 //funcion para capturar el id del productos y mostrar el detalle del producto
 //se debe importar el ROUTER
 verProducto(index:number){
  this.ruta.navigate(['/producto', index]);
  //console.log(index);



 }

  



}
