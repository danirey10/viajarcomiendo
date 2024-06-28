import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent implements OnInit {

  cookie:boolean = false;

    ngOnInit(): void {
      if(localStorage.getItem('cookies')== '1'){
        this.cookie=true;
      }else{
        this.cookie=false;
      }
    }

    aceptar(){
      this.cookie=true;
      localStorage.setItem('cookies','1');
    }

}
