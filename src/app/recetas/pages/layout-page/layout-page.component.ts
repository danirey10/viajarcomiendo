import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  @ViewChild('detectScroll',{
    static:false
  }) detectScroll? : ElementRef

  public sticky:boolean = false;

  constructor(
    private readonly _router: Router,
  ){ }

  inicio():boolean {
    let url:string = this._router.url;
    if(url=="/recetas" || url=="/recetas/list") return true;
    else return false;
  }

  @HostListener('document:scroll', ['$event.target'])
  public onScroll(targetElement:any) {
    this.sticky=window.scrollY>5;
  }
  metodoRecupera(str: string): void {
    this._router.navigateByUrl('/recetas/list')
  }


}
