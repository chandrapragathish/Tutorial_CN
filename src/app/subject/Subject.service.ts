import { Injectable } from '@angular/core';
import { Subject,Observable,BehaviorSubject,ReplaySubject} from 'rxjs';

@Injectable()

export class SubjectService {
    sub: Subject<any>;
    obs$: Observable<any>;
    private behsub:BehaviorSubject<any>;
    behObs$: Observable<any>;
    private replaysub:ReplaySubject<any>;
    replayObs$: Observable<any>;

    constructor() {
        this.sub = new Subject<any>();
        this.obs$=this.sub.asObservable();

        this.behsub=new BehaviorSubject<any>('Initial');
        this.behObs$=this.behsub.asObservable();

        this.replaysub=new ReplaySubject<any>(2);
        this.replayObs$=this.replaysub.asObservable();
    }
    sendreplayData(data) {
        this.replaysub.next(data);
    }
    sendBehData(data) {
        this.behsub.next(data);
    }
    sendData(data) {
        this.sub.next(data);
    }
}
