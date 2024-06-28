import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrl: './hamburguer.component.css'
})
export class HamburguerComponent implements OnChanges {

  @Input()
  checked!:boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.checked){
      let input = document.getElementsByTagName("input");
      input[0].checked = true;
    }
    else{
      let input = document.getElementsByTagName("input");
      input[0].checked = false;
    }
  }


}
