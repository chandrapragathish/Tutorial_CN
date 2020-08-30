import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulecomponentComponent } from './modulecomponent/modulecomponent.component';



@NgModule({
  declarations: [ModulecomponentComponent],
  imports: [
    CommonModule
  ],
  exports:[ModulecomponentComponent]
})
export class ParentModuleModule { }
