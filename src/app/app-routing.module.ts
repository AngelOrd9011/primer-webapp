import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home.component";
import { ErrorComponent } from "./components/error.component";
import { ProductosListComponent } from "./components/productos.component";
import { AddComponent } from "./components/add.component";
import { detailComponent } from "./components/producto-detail.component";

const routes: Routes = [
  {path:'producto-detail/:id',component:detailComponent},
  {path:'producto-add',component:AddComponent},
  {path:'productos',component: ProductosListComponent},
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
