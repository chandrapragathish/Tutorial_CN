import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  todo = null;
  constructor(private http: HttpService) {
    this.http.deleteTodoData(200).subscribe(data => console.log(data));
    this.http.getTodoData(200).subscribe(data => this.todo = data);

    this.http.putTodoData({id:2,userId:2,title:'TestPut'}).subscribe(data => console.log(data));
    this.http.postTodoData({id:2,userId:2,title:'TestPost'}).subscribe(data => console.log(data));
    
    
  }


}
