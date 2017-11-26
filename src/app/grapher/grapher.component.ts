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
  
  clickSetAmt = 0.0; 
  deducted: number; 
  amtSpent = 0; 
  amtLeft: number; 
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
      this.amtLeft = parseFloat(startAmt);   
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
      this.amtLeft = this.amtLeft - parseInt(dedAmt); 
    }
  }
}
