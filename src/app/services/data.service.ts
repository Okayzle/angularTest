import { Injectable } from '@angular/core';
// injectable puts in dependenies, but for now is not needed 

@Injectable()

export class DataService {

  // a very simple service 
  
  constructor() { }

  // hard coded array 
  cars = [
    'ford', 'chevy', 'honda' 
  ]; 

  myData(){
    return 'this is my data'; 
  }
}
