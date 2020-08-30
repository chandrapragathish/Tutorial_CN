import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
count=0;
Test :any={Name:"Chan"};
  constructor() { }

  Print(){

    this.Test=Math.random();
    return this.Test;
  }
  IncreaseCount(){
    return this.count++;
  }
 
}
