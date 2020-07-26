import { Component } from "@angular/core";
import { Router,ActivatedRoute,Params } from "@angular/router";

import { ProductoService } from "../services/producto.service";
import { Producto } from "../models/producto";
import { GLOBAL } from '../services/global';

@Component({
    selector:'producto-add',
    templateUrl:'../views/add.html',
    providers: [ProductoService]
})
export class AddComponent{

    public titulo: string;
    public producto: Producto;
    public filesToUpload;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo='Agregar Producto';
        this.producto= new Producto(0,'','',0,'');
    }
    ngOnInit(){
        console.log('Add Component');
    }
    onSubmit(){
        if (!this.filesToUpload) {
            this.saveProducto();
        }else{
            this._productoService.addFile(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result:any)=>{
                this.producto.imagen=result.filename;
                this.saveProducto();
            },(error)=>{
                console.log(error);
            });
        }
    }
    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if(response){
                    this._router.navigate(['/productos'])
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
    fileChangeEvent(fileInput:any){
        this.filesToUpload=<Array<File>>fileInput.target.files;
    }
}