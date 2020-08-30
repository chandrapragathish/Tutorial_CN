import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { SubjectService } from './Subject.service';

@Component({
  selector: 'subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  fromSub = null;
  constructor(private subjectService: SubjectService) {

    // var Obj$: Observable<any> = of(1, 2,3);
    // Obj$.subscribe(x => console.log(x));

    // var sub:Subject<any>=new Subject();

    // sub.subscribe(x=>console.log(`This is form  ${x}`));

    // sub.next(`Subject`);
    // sub.next(`Subject1`);
    // sub.next(`Subject2`);

    // this.subjectService.sub.subscribe(x => {
    //   console.log(`this is for subject component ${x}`)
    //   this.fromSub = x;
    // });
    //this.subjectService.sub.next('chandru');

    // this.subjectService.obs$.subscribe(x => {
    //   console.log(`this is observable for subject component ${x}`)
    //   this.fromSub = x;
    // });

    // this.subjectService.behObs$.subscribe(x => {
    //   console.log(`this is BehaviorSubject observable for subject component ${x}`)
    //   this.fromSub = x;
    // });

    this.subjectService.replayObs$.subscribe(x => {
      console.log(`this is replaySubject observable for subject component ${x}`)
      this.fromSub = x;
    });
  }



}
