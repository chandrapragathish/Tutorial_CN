import {Component,OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked, Input} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html'
})
export class FieldComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked {

  constructor() { }
  @Input() Type;
  ngOnInit(): void {
    console.log(`${this.Type} On Init`);
  }
  ngOnChanges() {
    console.log(`${this.Type} Onchanges`);
  }
  ngDoCheck(){
    console.log(`${this.Type} do check`);
  }
  ngAfterViewInit(){
    console.log(`${this.Type} AfterViewInit`);
  }
  ngAfterViewChecked(){
    console.log(`${this.Type} AfterViewChecked`);
  }
  ngOnDestroy() {
    console.log(`${this.Type} On Destroid`);
    // if(this.TimePicker)
    // clearInterval(this.TimePicker);
  }
}
