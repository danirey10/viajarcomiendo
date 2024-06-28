import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/resultado.interface';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import { Receta } from '../interfaces/receta.interface';
import { ResultadoMock } from '../../../assets/mocks/search-mock';
import { RecetaMock } from '../../../assets/mocks/receta-mock';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  public busqueda: BehaviorSubject<string> = new BehaviorSubject('');

  private complexSearch: string = 'https://api.spoonacular.com/recipes/complexSearch';
  private urlById: string = 'https://api.spoonacular.com/recipes';
  private apiKeys: string[] = environment.API_KEYS;
  private currentApiKeyIndex: number = 0;
  private offset: number = 0;
  private busq!: string;


  constructor(
    private http: HttpClient,
  ){ }

  busqueComplex(busq: string): Observable<Resultado> {
    if (this.busq !== busq) {
      this.busq = busq;
      this.offset = 0;
    }

    const url = this.buildUrl(busq, this.apiKeys[this.currentApiKeyIndex]);
    return this.http.get<Resultado>(url).pipe(
      catchError((error: HttpErrorResponse) => this.handleHttpError(error, busq))
    );
  }

  private buildUrl(busq: string, apiKey: string): string {
    return `${this.complexSearch}?query=${busq}&apiKey=${apiKey}&number=12&offset=${this.offset}`;
  }

  private handleHttpError(error: HttpErrorResponse, busq: string): Observable<Resultado> {
    if (error.status === 402) { // Límite de puntos agotado
      this.currentApiKeyIndex++;
      if (this.currentApiKeyIndex < this.apiKeys.length) {
        const url = this.buildUrl(busq, this.apiKeys[this.currentApiKeyIndex]);
        return this.http.get<Resultado>(url).pipe(
          catchError((err: HttpErrorResponse) => this.handleHttpError(err, busq))
        );
      }
    }
    return throwError(error);
  }

  busqueCocina(busq : string): Observable<Resultado|null> {
    if (this.busq !== busq) {
      this.busq = busq;
      this.offset = 0;
    }

    const url = this.buildUrlCocina(busq, this.apiKeys[this.currentApiKeyIndex]);
    return this.http.get<Resultado>(url).pipe(
      catchError((error: HttpErrorResponse) => this.handleHttpError(error, busq))
    );

  }

  private buildUrlCocina(busq: string, apiKey: string): string {
    return `${this.complexSearch}?cuisine=${busq}&apiKey=${apiKey}&number=12&offset=${this.offset}`;
  }

  setBusqueda(busq: string):void {
    this.busq=busq;
    this.busqueda.next(busq);
  }

  getBusqueda():Observable<string> {
    return this.busqueda.asObservable();
  }

  paginacion(offset:number){
    this.offset=offset;
    this.busqueComplex(this.busq).subscribe();
    this.setBusqueda(this.busq);
  }

  getRecetaById(id: number): Observable<Receta | undefined>{
    const url = this.buildUrlById(id, this.apiKeys[this.currentApiKeyIndex]);
    return this.http.get<Receta>(url).pipe(
      catchError((error: HttpErrorResponse) => this.handleHttpErrorId(error, id))
    );
    
    
    // MOCK
    // return of(RecetaMock);
  }

  private buildUrlById(id: number, apiKey: string): string {
    return `${this.urlById}/${id}/information?includeNutrition=false&addWinePairing=false&addTasteData=false&apiKey=${apiKey}`;
  }

  private handleHttpErrorId(error: HttpErrorResponse, id: number): Observable<Receta | undefined> {
    if (error.status === 402) { // Límite de puntos agotado
      this.currentApiKeyIndex++;
      if (this.currentApiKeyIndex < this.apiKeys.length) {
        const url = this.buildUrlById(id, this.apiKeys[this.currentApiKeyIndex]);
        return this.http.get<Receta>(url).pipe(
          catchError((err: HttpErrorResponse) => this.handleHttpErrorId(err, id))
        );
      }
    }
    return throwError(error);
  }

}
