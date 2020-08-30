import { Component,ViewEncapsulation } from '@angular/core';
import { DataService } from './Services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'Chandru';
  name = "Algular";
  constructor(public dataService: DataService) {

  }
  classname = "clsnme";
  InpName = '';
  Onchange(x) {
    console.log(x);
    this.InpName = x.target.value;

  }

  Sub(a, b) {
    console.log(a, b);
  }

  receiveData(event) {
    console.log(event);
  }
  // hooks1
  Show = false;
  Toggle() {
    this.Show = !this.Show;
  }
}





