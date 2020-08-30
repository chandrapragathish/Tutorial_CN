export class CustObservable {
    subscribers = [];
    constructor(sub) {
        console.log(sub);
        setTimeout(() => {
            sub(this);
        }, 0);
    }
    subscribe(method) {
        this.subscribers.push(method);
    }
    next(value) {
        console.log(this.subscribers);
        this.subscribers.forEach(z => {
            z(value);
        }
        )
    }
}