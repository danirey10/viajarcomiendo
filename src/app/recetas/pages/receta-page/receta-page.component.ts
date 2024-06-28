import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';
import { catchError, switchMap, take, throwError } from 'rxjs';
import { Receta } from '../../interfaces/receta.interface';
import { GoogletranslateService } from '../../services/googletranslate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-receta-page',
  templateUrl: './receta-page.component.html',
  styleUrl: './receta-page.component.css'
})
export class RecetaPageComponent implements OnInit {

  public receta?: Receta;
  public traduccion = {
    translations: [{
      translatedText: ''
    }]
  }
  public frasetraducida!: string;

  public urlCocinero:string = '../assets/cocinero.svg';
  public defaultImage: string = '../assets/no-image-receta.jpg';

  public urlWhat:string = 'https://viajarcomiendo.netlify.app/#/recetas/';
  public msgWhat:string = 'Mira esta receta de ViajarComiendo: ';

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _recetasService: RecetasService,
    private readonly _router: Router,
    private readonly _googleTranslate: GoogletranslateService,
    private readonly _viewportScroll : ViewportScroller,
  ) {

  }

  ngOnInit(): void {
    this._viewportScroll.scrollToPosition([0,0]);
    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._recetasService.getRecetaById(id)),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404){
            this._router.navigate(['recetas/']);
          }
          return throwError(() => error);
        }),
      ).subscribe(receta => {

        if (!receta) return this._router.navigate(['/recetas']);
        this.receta = receta;
        if(this.receta.title){
          this._googleTranslate.translateToSpa(this.receta?.title).subscribe((res): any => {
            this.receta?.title
              ? this.receta.title = res.data.translations[0].translatedText
              : undefined
          })
        }

        if(this.receta.extendedIngredients){
          this.receta.extendedIngredients.forEach(ingrediente => {
            this._googleTranslate.translateToSpa(ingrediente.name).subscribe((res): any => {
              ingrediente
                ? ingrediente.name = res.data.translations[0].translatedText
                : undefined
            })
          });
        }

        if(this.receta.analyzedInstructions){
          this.receta.analyzedInstructions.forEach(paso => {
            paso.steps.forEach(step => {
              this._googleTranslate.translateToSpa(step.step).subscribe((res): any => {
                step
                  ? step.step = res.data.translations[0].translatedText
                  : undefined
              })
            });
          });
        }

        return;
      })

  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage; // Asignar la imagen predeterminada
  }

  shareWhats(id:number){
    const fullMessage = `${this.msgWhat} ${this.urlWhat}${id}`;
    const encode = encodeURIComponent(fullMessage);
    const whatsUrl = `https://wa.me/?text=${encode}`;
    window.open(whatsUrl, '_blank');
  }

  shareFb(id:number){
    const fullMessage = `${this.urlWhat}${id}`;
    const encode = encodeURIComponent(fullMessage);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encode}`;
    window.open(facebookUrl, '_blank');
  }




}
