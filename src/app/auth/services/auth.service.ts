import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, AuthStatus, LoginResponse, CheckTokenResponse } from '../interfaces';
import { RegisterResponse } from '../interfaces/register-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject( HttpClient );
  private readonly baseUrl: string = environment.baseUrl;
  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  // ! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor(  ) {
    this.checkAuthStatus().subscribe();
  }

   private setAuthentication(user: User, token: string):boolean {
    this._currentUser.set(user);
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('token', token);
    return true;
  }


  login(email:string, password:string): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/login`;
    const body = { email, password };

    this.http.post<LoginResponse>(url, body).subscribe(resp => {
      localStorage.setItem('favoritas',resp.user.favorites.toString())
    });

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user,token)),
        catchError( err => throwError( () => err.error.message ))
      );
  }

  register(name:string, email:string, password:string){
    const url = `${ this.baseUrl }/auth`;
    const body = { name, email, password }
    return this.http.post<RegisterResponse>(url, body)
    .pipe(
      catchError( err => throwError( () => err.error.message ))
    );
  }

  updateImg(img:string){
    const url = `${ this.baseUrl }/auth/update/`;
    let email = this._currentUser()?.email;
    const body = { email, img };
    this._currentUser()!.img = img;
    return this.http.post<User>(url, body)
    .pipe(
      catchError( err => throwError( () => err.error.message ))
    );
  }

  updateName(name:string){
    const url = `${ this.baseUrl }/auth/updatename/`;
    let email = this._currentUser()?.email;
    const body = { email, name };
    if(name.length>6){
      return this.http.post<User>(url, body)
      .pipe(
        catchError( err => throwError( () => err.error.message ))
      );
    }else{
      this._currentUser()!.name = name;
    }
    return this.http.post<User>(url, body)
    .pipe(
      catchError( err => throwError( () => err.error.message ))
    );
  }

  checkPass(password:string): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/checkpass`;
    const email = this._currentUser()?.email;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user,token)),
        catchError( err => throwError( () => err.error.message ))
      );
  }

  changePassword(password:string){
    const url = `${ this.baseUrl }/auth/changepass/`;
    let email = this._currentUser()?.email;
    const body = { email, password };
    return this.http.post<User>(url, body)
    .pipe(
      catchError( err => throwError( () => err.error.message ))
    );
  }

  addFavorite(favorite:number){
    const url = `${ this.baseUrl }/auth/addfavorite/`;
    let email = this._currentUser()?.email;
    const body = { email, favorite };
    if(this._currentUser()!.favorites.includes(favorite)){
      const index = this._currentUser()!.favorites.indexOf(favorite);
      this._currentUser()!.favorites.splice(index,1);
      localStorage.setItem('favoritas', this._currentUser()!.favorites.toString());
    }else{
      this._currentUser()!.favorites.push(favorite);
      localStorage.setItem('favoritas', this._currentUser()!.favorites.toString());
    }
    return this.http.post<User>(url, body)
    .pipe(
      catchError( err => throwError( () => err.error.message ))
    );
  }

  checkAuthStatus():Observable<boolean> {

    const url = `${this.baseUrl }/auth/check-token`;
    const token = localStorage.getItem('token');

    if(!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${ token }`);

    return this.http.get<CheckTokenResponse>(url, { headers })
    .pipe(
      map( ({ user, token }) => this.setAuthentication(user,token)),
      catchError( () => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false)
      })
    );

  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('favoritas');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }


}
