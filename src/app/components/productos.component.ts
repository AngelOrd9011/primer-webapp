import { Component } from "@angular/core";
import { Router,ActivatedRoute,Params } from "@angular/router";
import { ProductoService } from "../services/producto.service";
import { Producto } from "../models/producto";

@Component({
    selector:'productos',
    templateUrl:'../views/productos.html',
    providers: [ProductoService]
})
export class ProductosListComponent{
    public titulo:string;
    public productos: Producto[];
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _productoService: ProductoService
    ){
        this.titulo='Lista de productos';
    }
    ngOnInit(){
        this._productoService.getProductos().subscribe(
            result => {
                this.productos=result.data;
            },
            error => {
                console.log(<any>error);
            }
        )
    }
}