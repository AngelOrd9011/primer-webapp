import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { Producto } from "../models/producto";
import { GLOBAL } from "./global";

@Injectable()
export class ProductoService{
    public url:string;

    constructor(public _http:HttpClient){
      this.url=GLOBAL.url;
    }
  
    getProductos() {
      return this._http.get(this.url+'productos');
    }
}