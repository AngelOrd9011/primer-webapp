import { Component,Input } from "@angular/core";
import { Producto } from "../models/producto";

@Component({
    selector: 'details',
    templateUrl: '../views/detail2.html'
})
export class detail2Component{
    @Input('detalles') producto: any;
}