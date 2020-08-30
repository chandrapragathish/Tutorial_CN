import { Component, OnInit, OnDestroy, OnChanges, DoCheck,AfterViewInit,AfterViewChecked } from '@angular/core';
// import {FieldComponent} from '../field/field.component';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html'
})
export class UserformComponent implements OnInit, OnDestroy, OnChanges, DoCheck,AfterViewInit,AfterViewChecked {

  constructor() { }
  name = "Users";
  ngOnInit(): void {
    console.log(`Parent On Init`);
  }
  ngOnChanges() {
    console.log(`Parent Onchanges`);
  }
  ngDoCheck() {
    console.log(`Parent do check`);
  }
  ngAfterViewInit(){
    console.log(`Parent AfterViewInit`);
  }
  ngAfterViewChecked(){
    console.log(`Parent AfterViewChecked`);
  }
  ngOnDestroy() {
    console.log(`Parent On Destroid`);
  }


}
