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
    public producto:Producto;
    constructor(
        private _productoServide:ProductoService,
        private _route: ActivatedRoute,
        private _router:Router  
    ){
        
    }
    ngOnInit(){
        console.log('Detalles del producto');
        this.getProducto();
    }
    getProducto(){
        this._route.params.forEach((params: Params) =>{
            let id=params['id'];
            this._productoServide.getProducto(id).subscribe(
                result=>{
                    if(result){
                        this.producto=result.data;
                    }else{
                        this._router.navigate(['/productos']);
                    }
                },
                error=>{
                    console.log(<any>error)
                }
            );
        });
    }
}