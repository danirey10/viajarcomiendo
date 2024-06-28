import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mapamundi',
  templateUrl: './mapamundi.component.html',
  styleUrl: './mapamundi.component.css'
})
export class MapamundiComponent {

  constructor (
    private readonly _recetasService : RecetasService,
    private readonly _router : Router,
  ){}


  @ViewChild('tooltip', {read:ElementRef})
  tooltip!: ElementRef<HTMLElement>;
  nametooltip? : string = '';

  @ViewChild('tool', {read:ElementRef})
  tool!: ElementRef<HTMLElement>;

  private paises : string[] = ['spain','france','italy','greece','thailand','mexico','north korea','south korea','honshu','vietnam','kyushu','shinoku','hokkaido','ireland','india','germany','china','britain','canada','haiti','domincan republic','jamaica'];
  private novalid : string[] = ['east antarctica', 'antarctic peninsula', 'antarctic peninsula', 'alexander', 'robert', 'king george', 'james ross', 'elephant', 'thurston', 'kerguelen'];

  mapaClick(e: MouseEvent) {

    let state:SVGClipPathElement | null;
    state=e.target as SVGClipPathElement;


  if(state.id=="" || state.id=="svg2" || this.novalid.includes(state.id)){
    return;
  }else{
      if(this.paises.includes(state.id)){
        switch(state.id){
          case 'spain':
            this.search('spanish');
            break;
          case 'france':
            this.search('french');
            break;
          case 'italy':
            this.search('italian');
            break;
          case 'greece':
            this.search('greek');
            break;
          case 'thailand':
            this.search('thai');
            break;
          case 'mexico':
            this.search('mexican');
            break;
          case 'north korea':
            this.search('korean');
            break;
          case 'south korea':
            this.search('korean');
            break;
          case 'honshu':
            this.search('japanese');
            break;
          case 'kyushu':
            this.search('japanese');
            break;
          case 'shinoku':
            this.search('japanese');
            break;
          case 'hokkaido':
            this.search('japanese');
            break;
          case 'vietnam':
            this.search('vietnamese');
            break;
          case 'ireland':
            this.search('irish');
            break;
          case 'india':
            this.search('indian');
            break;
          case 'germany':
            this.search('german');
            break;
          case 'china':
            this.search('chinese');
            break;
          case 'britain':
            this.search('british');
            break;
          case 'canada':
            this.search('cajun');
            break;
          case 'haiti':
            this.search('caribbean');
            break;
          case 'domincan republic':
            this.search('caribbean');
            break;
          case 'jamaica':
            this.search('caribbean');
            break;
          default:
            return;
        }
      }else{
        if(state.id=='norway' || state.id=='sweden' || state.id=='finland' || state.id=='alaska'){
          this.search('nordic');
          return;
        }
        if(e.offsetX>0 && e.offsetY>0 &&  e.offsetY<422 &&  e.offsetX<535){
          this.search('american');
          return;
        }
        if(e.offsetX>0 && e.offsetY>422 &&  e.offsetY<842 &&  e.offsetX<547){
          this.search('latin american');
          return;
        }
        if(e.offsetX>574 && e.offsetY>335 &&  e.offsetY<680 &&  e.offsetX<923){
          this.search('african');
          return;
        }
        if(e.offsetX>635 && e.offsetY>280 &&  e.offsetY<348 &&  e.offsetX<795){
          this.search('mediterranean');
          return;
        }
        if(e.offsetX>775 && e.offsetY>304 &&  e.offsetY<460 &&  e.offsetX<946){
          this.search('middle eastern');
          return;
        }
        if(e.offsetX>670 && e.offsetY>140 &&  e.offsetY<350 &&  e.offsetX<851 && state.id!='russia'){
          this.search('european');
          return;
        }
        if(e.offsetX>880 && e.offsetY>217 &&  e.offsetY<530 &&  e.offsetX<1200 && state.id!='russia'){
          this.search('asian');
          return;
        }
        if(e.offsetX>786 && e.offsetY>0 &&  e.offsetY<313 &&  e.offsetX<1315 || state.id=='russia'){
          this.search('eastern european');
          return;
        }
        if(e.offsetX>960 && e.offsetY>550 &&  e.offsetY<926 &&  e.offsetX<1440 || state.id!='russia'){
          this.search('southern');
          return;
        }
      }
    }



  }


  showToolTip(e:MouseEvent){

    let state:SVGClipPathElement | null;
    if(e.target){
      state=e.target as SVGClipPathElement;

      /*
        // Esto es para saber el punto exacto del mouse
        this.tool.nativeElement.style.opacity='1';
        this.nametooltip='X: '+e.offsetX+'  Y: '+e.offsetY;
      */


      if(state.id !== 'svg2'){
        this.nametooltip=state.id;
        this.tool.nativeElement.style.opacity='1';

      }else{
        this.nametooltip='';
        this.tool.nativeElement.style.opacity='0';
      }


    }

    this.tool.nativeElement.style.top = (e.offsetY-10).toString()+'px';
    this.tool.nativeElement.style.left = (e.offsetX+10).toString()+'px';

  }

  search(str: string){
    this._recetasService.busqueCocina(str);
    this._recetasService.setBusqueda(str);
    this._router.navigate(['recetas/list']);
  }



}
