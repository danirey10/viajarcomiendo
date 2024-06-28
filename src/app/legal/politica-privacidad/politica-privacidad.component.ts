import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrl: './politica-privacidad.component.css'
})
export class PoliticaPrivacidadComponent {

  public email:string = 'danny_rey_10@hotmail.com';
  public nombreempresa:string = 'ViajarComiendo';

  goBack():void {
    window.history.back();
  }

}
