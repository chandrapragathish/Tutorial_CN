import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CustObservable } from './custObservable';
@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() {
    // const test$ = new Observable(subscriber => {
    //   console.log('Test');
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   //subscriber.error('error occured');
    //   subscriber.complete();
    //   subscriber.next(3);
    //   subscriber.next(4);
    // });
    // test$.subscribe(
    //   x => {
    //     console.log(x);
    //   },
    //   error => {
    //     console.log('error',error);

    //   }
    // ),
    //   complete => {
    //     console.log('complete');
    //   }
    // --------------video2----------------
    // const test$=new Observable(sub=>{
    //   sub.next('chandru');
    //   sub.next('chandru2');
    // })
    // test$.subscribe(x=>{
    //   console.log(`1 :${x}`)
    // })

    // test$.subscribe(y=>{
    //   console.log(`2 :${y}`)
    // })
    // ---CustObservable--
    const check$ = new CustObservable(function (sub) {
      sub.next('chandru1');
      sub.next('chandru2');
    })
    check$.subscribe(x => {
      console.log(`1 :${x}`);
    })
    check$.subscribe(y => {
      console.log(`2 :${y}`);
    })
    debugger
    // Create an Observable that will create an AJAX request
    const apiData = ajax('http://192.168.43.44:517/api/Configuration/LoadTOD');
    // Subscribe to create the request
    apiData.subscribe(res => {
      let a = res.status;
      let b=res.response;
      console.log(res)
      console.log(res.status, res.response);
    });

  }

  ngOnInit(): void {
  }

}
