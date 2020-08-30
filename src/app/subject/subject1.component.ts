import { Component } from '@angular/core';
import { Subject } from 'rxjs'
import { SubjectService } from './Subject.service';

@Component({
    selector: 'subject1',
    template: '<h1>Hello</h1> <button (click)="emit()">click</button>'

})

export class subject1Componenet {
    isSub = false;
    count = 0;
    constructor(private subjectService: SubjectService) {
        this.subjectService.sub.subscribe(x => console.log(`this is for subject1 component ${x}`));
        // this.subjectService.sub.next('subject1 component');
    }
    emit() {
        // this.subjectService.sendData(Math.random());
        // this.subjectService.sendBehData(Math.random());
        this.subjectService.sendreplayData(Math.random());
        if (!this.isSub) {
            this.isSub = true;
            this.subjectService.behObs$.subscribe(x => {
                console.log(`this is BehaviorSubject observable for subject1 component ${x}`)

            });
            
            
        }
        this.count++;
        if (this.count == 3) {
            this.subjectService.replayObs$.subscribe(x => {
                console.log(`this is replySubject observable for subject1 component ${x}`)

            });
        }
    }
}