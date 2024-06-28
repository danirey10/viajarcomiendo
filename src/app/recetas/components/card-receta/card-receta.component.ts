import { Component, Input,computed, inject } from '@angular/core';
import { Result } from '../../interfaces/resultado.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import Swal from 'sweetalert2';

export interface Store{
  title: string;
  id: number;
}

@Component({
  selector: 'card-receta',
  templateUrl: './card-receta.component.html',
  styleUrl: './card-receta.component.css'
})
export class CardRecetaComponent {

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  public _store: BehaviorSubject<Store> = new BehaviorSubject({
    title:'',
    id:0
  });

  public almacena! : Store;
  
  public defaultImage: string = '../assets/no-image-receta.jpg';

  @Input() result!: Result;
  @Input() favorita?: boolean;

  setStore(title: string, id: number):void {
    let gstore: Store = ({
      title: title,
      id: id,
    });
    this.almacena=gstore;
    this._store.next(gstore);
  }

  goReceta(title:string, id:number){
    // this._store.setRecetaSeleccionada({title: 'O titulo xa traducido', id: 0})
    this.setStore(title, id);
    this._router.navigateByUrl(`/recetas/${id}`);
  }

  addFavorite(id:number){
    if(this.favorita){
      this.favorita=false;
    }else{
      this.favorita=true;
    }
    this._authService.addFavorite(id).subscribe(
    {
      error: (message) => {
        Swal.fire({title:'Error', text:message, icon:"error"})
      }
    });
  }

  userActive():boolean {
    if(this._authService.currentUser()){
      return true;
    }else{
      return false;
    }
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage; // Asignar la imagen predeterminada
  }

}
