import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParentModuleModule } from './parent-module/parent-module.module';
import { DataService } from './Services/data.service';
import { HelloComponenet } from './hello.component';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './field/field.component';
import { UserformComponent } from './userform/userform.component';
import { hiComponent, hiiComponent } from './test/hi.component'
import { HostDirective } from './test/host.directive';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { helloComponent } from './hostbinding/hello.component';
import { Heilight } from './hostbinding/highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { sqPipe, filterPipe } from './pipe/custom.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';
import {SubjectService} from './subject/Subject.service'; 
import{subject1Componenet} from './subject/subject1.component';
import { CRUDComponent } from './crud/crud.component';
import {SharedModule} from './crud/shared.module';
import { InterceptorComponent } from './interceptor/interceptor.component';
import {InterceptorService} from './interceptor/Interceptor.service';
import {Http_Interceptor} from './interceptor/http.interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloComponenet,
    FieldComponent,
    UserformComponent,
    hiComponent,
    hiiComponent,
    HostDirective,
    HostbindingComponent,
    helloComponent,
    Heilight,
    PipeComponent,
    sqPipe,
    filterPipe,
    ObservableComponent,
    RxjsComponent,
    SubjectComponent,
    subject1Componenet,
    CRUDComponent,
    InterceptorComponent

  ],
  entryComponents: [hiComponent, hiiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModuleModule,
    FormsModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [DataService,SubjectService,InterceptorService,{provide:HTTP_INTERCEPTORS, useClass:Http_Interceptor,multi:true}],
  bootstrap: [InterceptorComponent]
})
export class AppModule { }
