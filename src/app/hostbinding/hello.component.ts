import { Component, Input, HostBinding,HostListener } from '@angular/core';

@Component({
    selector: 'hello',
    template: '<h1>  Hello {{name}}</h1> ',
    styles: ['h1{font-family:Lato;font-size:20px;}']

})

export class helloComponent {
    @Input() name: string;
    // @HostBinding('style.color') color = 'red';
    // @HostListener('click') function () {
    //     this.color='green';
    // }
    // click(){
    //     this.color='blue';
    // }
    
}