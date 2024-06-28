import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, computed, inject, output } from '@angular/core';
import { Result, Resultado } from '../../interfaces/resultado.interface';
import { RecetasService } from '../../services/recetas.service';
import { GoogletranslateService } from '../../services/googletranslate.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  @Output() result = new EventEmitter<Result>();
  @Output() tagInput2: EventEmitter<string> = new EventEmitter();

  private readonly _authService = inject(AuthService);
  public user = computed(() => this._authService.currentUser());

  @ViewChild('txtTagInput')
  public inputNum!: ElementRef<HTMLInputElement>;

  public resultado!: Resultado;
  public searchParam: string = '';
  private offset!:number;
  public totalResults!:number;
  public paginas!: number;
  public favoritas? : number[];

  constructor(
    private readonly _recetasService : RecetasService,
    private readonly _googleTranslate: GoogletranslateService,
    private readonly _viewportScroll : ViewportScroller,
  ) {

    let muchasfav = localStorage.getItem('favoritas');
    let arrmuchasfav = muchasfav?.split(',').map(fav => +fav);
    arrmuchasfav = arrmuchasfav?.filter(fav => !isNaN(fav));
    this.favoritas = arrmuchasfav;

    this._recetasService.getBusqueda().subscribe(r =>{
      this.searchParam = r;
      this.makeSearch();
    });

  }

  ngOnInit(): void {
    this._viewportScroll.scrollToPosition([0,0]);
  }


  public makeSearch(): void {

    this._recetasService.busqueComplex(this.searchParam).subscribe(resp=> {
      if(resp) this.resultado=resp;
      this.offset=this.resultado.offset;
      if(this.resultado.totalResults>900){
        this.totalResults=900;
      }else{
        this.totalResults=this.resultado.totalResults;
      }
      this.paginas = Math.round(this.totalResults/12);
      this.resultado.results.forEach(result => {
        this._googleTranslate.translateToSpa(result.title).subscribe((res): any => {
          result
            ? result.title = res.data.translations[0].translatedText
            : undefined
        })
      });
    })
  }

  isFavorite(id:number):boolean{
    if(this.favoritas?.includes(id)){
      return true;
    }else{
      return false;
    }
  }

  next(){

      if(this.offset+12 > this.totalResults){
        let resta = this.totalResults-this.offset;
        let total = 12-resta;
        this.offset = this.offset+total;
        this._recetasService.paginacion(this.offset);
      }else{
        this.offset=this.offset+12;
        this._recetasService.paginacion(this.offset);
      }

    }

  prev(){
    if(this.offset-12 < 0 && this.offset > 0){
      this.offset = 0;
      this._recetasService.paginacion(this.offset);
    if(this.offset-12 < 0){
      return;
    }
    }else{
      this.offset=this.offset-12;
      this._recetasService.paginacion(this.offset);
    }
  }

  goToPage(){
    let num: number = parseInt(this.inputNum.nativeElement.value);
    if(num*12 > this.totalResults){
      return;
    }else{
      this.offset=num*12;
      this._recetasService.paginacion(this.offset);
    }
  }


}
