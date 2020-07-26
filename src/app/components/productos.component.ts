import { Component } from "@angular/core";
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