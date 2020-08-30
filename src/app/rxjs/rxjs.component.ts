import { Component, OnInit } from '@angular/core';
import { timer, observable ,combineLatest, interval, concat} from 'rxjs';
import { first ,map,take} from 'rxjs/operators'

@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    // const firstTImer = timer(0, 1000);
    // const secontTimer = timer(500, 1000);

    // const firstTImer = interval(1000).pipe(map(x=>x+10));
    // const secontTimer = interval(3000).pipe(map(x=>x+100)); 

    const firstTImer = interval(1000).pipe(take(10));
    const secontTimer = interval(3000).pipe(take(5)); 

    const combinedTimers = concat(firstTImer, secontTimer);
    combinedTimers.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
