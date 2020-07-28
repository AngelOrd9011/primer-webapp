import { Component } from "@angular/core";
import { Router,ActivatedRoute,Params } from "@angular/router";
import { ProductoService } from "../services/producto.service";
import { Producto } from "../models/producto";
import { GLOBAL } from "../services/global";

@Component({
    selector:'producto-edit',
    templateUrl:'../views/add.html',
    providers:[ProductoService]
})
export class editComponent{
    public titulo:string;
    public producto:Producto;
    public filesToUpload;
    constructor(
        private _productoService:ProductoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.titulo='Editar Producto';
        this.producto=new Producto(1,'','',1,'');
    }
    ngOnInit(){
        this.getProducto();
    }
    getProducto(){
        this._route.params.forEach((params: Params) =>{
            let id=params['id'];
            this._productoService.getProducto(id).subscribe(
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
    onSubmit(){
        if (!this.filesToUpload) {
            this.updateProducto();
        }else{
            this._productoService.addFile(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result:any)=>{
                this.producto.imagen=result.filename;
                this.updateProducto();
            },(error)=>{
                console.log(error);
            });
        }
    }
    updateProducto(){
        this._route.params.forEach((params: Params) =>{
            let id=params['id'];
            this._productoService.editProducto(id,this.producto).subscribe(
                response => {
                    if(response){
                        this._router.navigate(['/producto-detail',id])
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });    
    }
    fileChangeEvent(fileInput:any){
        this.filesToUpload=<Array<File>>fileInput.target.files;
    }
}