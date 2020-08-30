import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[heilight]'
})

export class Heilight{
    @Input('heilight') heilightcolor
constructor(public eleRef:ElementRef){
    this.eleRef.nativeElement.style.color='red'
}
@HostListener('mouseenter')  mouse1() {
    this.eleRef.nativeElement.style.color=this.heilightcolor;
}
@HostListener('mouseleave') mouse2 () {
    this.eleRef.nativeElement.style.color='green'
}
}