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
  
  clickSetAmt: number; 
  deducted: number; 
  amtSpent = 0; 
  message = ''; 
  message2 = ''; 
  buttonStatus = false; 
  spentStatus = true; 

  setClick(startAmt){
    if(isNaN(startAmt)){
      this.clickSetAmt = null; 
      this.message = 'you did not type in a number!'; 
    } else {
      this.message = ''; 
      this.clickSetAmt = startAmt;   
      this.buttonStatus = true;     
    }
  }

  setDeduct(dedAmt){
    if(isNaN(dedAmt)){
      this.message2 = 'you did not type in a number!'; 
    } else {
      this.spentStatus = false; 
      this.message2 = ""; 
      this.deducted = dedAmt; 
      
      this.amtSpent = this.amtSpent + parseInt(dedAmt);  
    }
  }
}
