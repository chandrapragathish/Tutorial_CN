import { Component, OnInit } from '@angular/core';
import {InterceptorService} from './Interceptor.service';

@Component({
  selector: 'interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {
users=null;
  constructor(private InterService:InterceptorService) { 
    this.InterService.getAllUsers().subscribe(data=>this.users=data);
    
  }

  ngOnInit(): void {
  }

}
