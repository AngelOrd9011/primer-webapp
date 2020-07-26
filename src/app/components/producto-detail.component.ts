import { Component } from "@angular/core";
import { Router,ActivatedRoute,Params } from "@angular/router";

import { ProductoService } from "../services/producto.service";
import { Producto } from "../models/producto";

@Component({
    selector:'producto-detail',
    templateUrl:'../views/detail.html',
    providers:[ProductoService]
})
export class detailComponent{
    public producto:ProductoService;
    constructor(
        private _productoServide:ProductoService,
        private _route: ActivatedRoute,
        private _router:Router  
    ){
        
    }
    ngOnInit(){
        console.log('Detalles del producto');
    }
}