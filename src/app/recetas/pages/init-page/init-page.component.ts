import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'init-page',
  templateUrl: './init-page.component.html',
  styleUrl: './init-page.component.css'
})
export class InitPageComponent {

  busqReg: string = 'Escoge una región';
  busqPais: string = 'Escoge un país';
  selected:boolean = true;
  hidden:boolean = true;
  imgViaje:string = '../assets/comer-viajar.png';

  constructor(
    private readonly _recetasService : RecetasService,
    private readonly _router : Router,
  ){}

  search(str:string){
    this._recetasService.busqueCocina(str);
    this._recetasService.setBusqueda(str);
    this._router.navigate(['recetas/list']);
  }




}
