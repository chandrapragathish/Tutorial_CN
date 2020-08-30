import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor(public http: HttpClient) { }
  jsondata = this.http.get('http://192.168.43.44:517/api/Configuration/LoadTOD');
 date$=interval(1000).pipe(
   map(x=> new Date()),
   take(10)
 )


  value = 'hi';
  day = new Date();
  num = 45544454.268;
  squareNo = 5;
  users = [{ name: 'chandru', age: 24 }, { name: 'chann', age: 22 }, { name: "Pavi", age: 20 }];
  ngOnInit(): void {
  }
  addUser(Username) {
    this.users.push({ name: Username, age: 21 });
    console.log(this.users);
  }
}