import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home.component";
import { ErrorComponent } from "./components/error.component";
import { ProductosListComponent } from "./components/productos.component";
import { AddComponent } from "./components/add.component";
import { detailComponent } from "./components/detail.component";
import { editComponent } from "./components/edit.component";
import { detail2Component } from "./components/detail2.component";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    AddComponent,
    detailComponent,
    detail2Component,
    editComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
