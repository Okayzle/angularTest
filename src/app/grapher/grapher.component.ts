import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grapher',
  templateUrl: './grapher.component.html',
  styleUrls: ['./grapher.component.css']
})
export class GrapherComponent implements OnInit {
  constructor() { 

  }

  ngOnInit() {

  }
  
  clickSetAmt; 
  deducted; 
  message = ''; 
  message2 = ''; 

  setClick(startAmt){
    if(isNaN(startAmt)){
      this.clickSetAmt = null; 
      this.message = 'you did not type in a number!'; 
    } else {
      this.message = ''; 
      this.clickSetAmt = startAmt;       
    }
  }

  setDeduct(dedAmt){
    if(isNaN(dedAmt)){
      this.message2 = 'you did not type in a number!'; 
    } else {
      this.message2; 
      this.deducted = dedAmt; 
    }
  }
}
