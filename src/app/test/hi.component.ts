import { Component, Input } from '@angular/core';

@Component({
    selector: 'Hi',
    template: '<h1> Hi {{name}}</h1>',
    styles: ['h1{font-family:Lato}']

})

export class hiComponent {
    @Input() name: string;

}

@Component({
    selector: 'Hii',
    template: '<h1> Hii {{name}}</h1>',
    styles: ['h1{font-family:Lato}']

})

export class hiiComponent {
    @Input() name: string;
    
}