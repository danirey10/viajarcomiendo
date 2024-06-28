import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleObj } from '../interfaces/googleobj.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RespGoogle } from '../interfaces/respgoogleobj.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {


  url:string = 'https://translation.googleapis.com/language/translate/v2?key=';
  key: string = environment.GKEY;

  constructor(
    private readonly _http : HttpClient,
  ) { }

  translate(obj: GoogleObj): Observable<RespGoogle>{
    return this._http.post<RespGoogle>(this.url + this.key, obj);
  }

  translateToSpa(frase: string): Observable<RespGoogle> {
    let traduccion: GoogleObj = ({
      q: frase,
      source: 'en',
      target: 'es',
      format: 'text',
    });
    return this.translate(traduccion);
  }

  translateToEng(frase: string): Observable<RespGoogle> {
    let traduccion: GoogleObj = ({
      q: frase,
      source: 'es',
      target: 'en',
      format: 'text',
    });
    return this.translate(traduccion);
  }


}
