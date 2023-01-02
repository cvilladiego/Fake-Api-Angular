
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {




  constructor( private http:HttpClient) { }

  //METODO PARA CONECTARSE A LA API Y TRAER LOS PRODUCTOS
  obteberTodosLosProductos(){
    return this.http.get('https://fakestoreapi.com/products');
  }





}
