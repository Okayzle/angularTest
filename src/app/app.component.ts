// list of imports 
import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

// decorator: defines what the component is 
@Component({
  // so in html, it will be called app root 
  selector: 'app-root',
  // the template for the html when there is a considerable amount of html 
  // note: interpolation is just a fancy word for displaying data in the template 
  templateUrl: './app.component.html',
  // the stypes for the html 
  styleUrls: ['./app.component.css'],
  providers:[DataService], 
  // animations is its own chunk 
  animations: [
    trigger('myAni', [
      // change state from small to large 
      state('small', style({
        transform: 'scale(1)',
      })), 
      state('large', style({
        transform: 'scale(1.2)',
      })), 
      // during the transition 
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35%)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0%)', offset: 1}),
      ]))), 
    ]), 
  ]
})

// the class itself: anything found here can be retrived from the template 
export class AppComponent {
  title = 'Track Your Money...';

  // property binding is just passing data from component to set values in the view 
  // all about component -> view, we control the data from the components 
  // can also enable or disable with property binding...but is only one way
  
  // event binding is one way data binding that is view -> component 
  // there are many events, look them up! 
  // event must be wrapped in parantheses... 

  // we can chage css by binding with properties 
  // we can changes syles through binding as well
  
  // services are made so we can share code and data across our components 

  // we can access services by declaring them 

  // dev -> live 
  
  constructor(private dataService:DataService){

  }

  somprop: string = ''; 

  state: string = 'small' 
  
  // anything in this method will run when started
  ngOnInit(){

  }



}
