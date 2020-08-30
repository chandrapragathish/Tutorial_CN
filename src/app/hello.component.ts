import {Component,Input,Output, EventEmitter,OnInit,OnDestroy,OnChanges,DoCheck} from '@angular/core';

@Component({
    selector:'Hello',
    // template:'<h1 >Hello {{name}}</h1><br> <button (click)="sendDataToParent();">Click</button>'
    template: '<p class="test">This from hello</p>'
    // styles:['.test{background-color:red;}']
})

export class HelloComponenet implements OnInit,OnDestroy,OnChanges,DoCheck{
    @Input('aliasName') name :string;
     TimePicker=null;;
    @Output() sendData:EventEmitter<any>=new EventEmitter<any> ();
   
    sendDataToParent(){
        this.sendData.emit('Testing the transfer');
    }
    constructor(){}
    ngOnChanges(){
       console.log(`Onchanges`);
    }
    ngOnInit(){
         console.log(`Component initialized`);
        //  this.TimePicker=setInterval(()=>{
        //      console.log( (new Date()));
        //  },1000);
    }
    
    ngOnDestroy() {
        console.log(`Component Destroid`);
        // if(this.TimePicker)
        // clearInterval(this.TimePicker);
            }
            ngDoCheck(){
                console.log(`Do check`);
            }
}
