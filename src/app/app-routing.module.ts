import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  {path:'inicio', component:ProductosComponent},
  {path:'producto/:id', component:ProductoComponent},
  {path:'**', pathMatch:'full', component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
