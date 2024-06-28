import { Component, Input, OnInit } from '@angular/core';
import { RecetasService } from '../../../recetas/services/recetas.service';
import { Receta } from '../../../recetas/interfaces/receta.interface';
import { GoogletranslateService } from '../../../recetas/services/googletranslate.service';
import { Store } from '../../../recetas/components/card-receta/card-receta.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-fav',
  templateUrl: './user-fav.component.html',
  styleUrl: './user-fav.component.css'
})
export class UserFavComponent implements OnInit {

  @Input() id!: number;

  public receta? : Receta;

  public _store: BehaviorSubject<Store> = new BehaviorSubject({
    title:'',
    id:0
  });

  constructor(
    private readonly _recetasService : RecetasService,
    private readonly _googleTranslate: GoogletranslateService,
    private readonly _router : Router,
    private readonly _authService : AuthService,
  ){}

  public almacena! : Store;

  setStore(title: string, id: number):void {
    let gstore: Store = ({
      title: title,
      id: id,
    });
    this.almacena=gstore;
    this._store.next(gstore);
  }

  ngOnInit(): void {
    this._recetasService.getRecetaById(this.id).subscribe(resp => {
      this.receta = resp;
      if(this.receta){
        this._googleTranslate.translateToSpa(this.receta.title).subscribe((res): any => {
          this.receta?.title
          ? this.receta.title = res.data.translations[0].translatedText
          : undefined
        });
        this._googleTranslate.translateToSpa(this.receta.instructions).subscribe((res): any => {
          this.receta?.instructions
          ? this.receta.instructions = res.data.translations[0].translatedText
          : undefined
        });
      }
    });
  }

  goReceta(title:string, id:number){
    this.setStore(title, id);
    this._router.navigateByUrl(`/recetas/${id}`);
  }

  deleteReceta(id:number){
    this._authService.addFavorite(id).subscribe(
      {
        error: (message) => {
          Swal.fire({title:'Error', text:message, icon:"error"})
        }
      });
  }

}
