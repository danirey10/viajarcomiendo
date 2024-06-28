import { Component, Input, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  private readonly _authService = inject(AuthService);
  public user = computed(() => this._authService.currentUser());
  public checked: boolean = false;
  public overlay = document.getElementsByClassName('overlay');
  public menubar = document.getElementsByClassName('menubar');
  public widthWindow: number = window.innerWidth;

  @Input() hasScroll?:boolean = false;

  public urlLogo:string = '../assets/logo-viajar-comiendo.svg';
  public urlImage: string = '../assets/noimage.png';

  logout(){
    this._authService.logout();
  }

  getImage():string {
    if(this.user()!.img.length < 2){
      return this.urlImage;
    }else{
      this.urlImage = this.user()?.img!;
      return this.urlImage;
    }
  }

  abreNav():void{
    this.checked = true;
    this.overlay[0].classList.add('open');
    this.menubar[0].classList.add('open');
  }

  closeNav():void{
    this.checked = false;
    this.overlay[0].classList.remove('open');
    this.menubar[0].classList.remove('open');
  }



}
