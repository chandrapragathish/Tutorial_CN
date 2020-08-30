import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostDirective } from './host.directive';
import { hiComponent, hiiComponent } from './hi.component'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;
  Components = [hiComponent, hiiComponent]
  constructor(public factoryRes: ComponentFactoryResolver) { }
  name = 'chandru';
  ngOnInit(): void {
  }

  loadComponent(id) {
    this.childRef.ViewRef.clear();
    const resolveFactory = this.factoryRes.resolveComponentFactory(this.Components[id]);
    const compRef=this.childRef.ViewRef.createComponent(resolveFactory);
    compRef.instance.name="Pandi";
  }

}
