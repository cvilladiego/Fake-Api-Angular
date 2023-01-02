import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

//SERVICIOS
import { ProductosService } from './servicios/productos.service';
//COMPONENTES
import { ProductosComponent } from './componentes/productos/productos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductoComponent } from './componentes/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavbarComponent,
    ProductoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductosService,
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
