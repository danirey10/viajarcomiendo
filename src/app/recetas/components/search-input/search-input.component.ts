import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { GoogletranslateService } from '../../services/googletranslate.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  @Output() tagInput2: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly _recetasService : RecetasService,
    private readonly _googleTranslate: GoogletranslateService,
  ){}

  busqueda(){
    if(this.tagInput.nativeElement.value == ''){
      return;
    }else{
      this._googleTranslate.translateToEng(this.tagInput.nativeElement.value).subscribe(resp => {
        let str:string = resp.data.translations[0].translatedText;
        this._recetasService.setBusqueda(str)
        this.tagInput2.emit(str)
      });
    }
  }

}
