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
    public confirm;
    constructor(
        private _productoService: ProductoService
    ){
        this.titulo='Lista de productos';
        this.confirm=null;
    }
    ngOnInit(){
        this.getProductos();
    }
    getProductos(){
        this._productoService.getProductos().subscribe(
            result => {
                this.productos=result.data;
            },
            error => {
                console.log(<any>error);
            }
        )
    }
    confirmDelete(id){
        this.confirm=id;
    }
    cancelDelete(){
        this.confirm=null;
    }
    deleteProducto(id){
        this._productoService.deleteProducto(id).subscribe(
            result =>{
                if (result) {
                    this.getProductos();
                }
            },
            error =>{
                alert('Error en el servidor');
            }
        );
    }
}