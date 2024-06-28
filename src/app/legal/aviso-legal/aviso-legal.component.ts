import { Component } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrl: './aviso-legal.component.css'
})
export class AvisoLegalComponent {

  public email:string = 'danny_rey_10@hotmail.com';
  public nombreempresa:string = 'ViajarComiendo';

  goBack():void {
    window.history.back();
  }

}
