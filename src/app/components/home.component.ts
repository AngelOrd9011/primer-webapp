import { Component } from "@angular/core";

@Component({
  selector:'home',
  templateUrl:'../views/home.html'
})
export class HomeComponent{
public titulo: string;

  constructor(){
    this.titulo='Pagina de inicio';
  }
  ngOnInit(){
    console.log('LISTO');
  }
}
