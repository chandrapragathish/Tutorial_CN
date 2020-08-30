import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class HttpService {

    constructor(private http: HttpClient) {

    }
    getTodoData(todoId: number = 1) {
        return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    }
    postTodoData(data: any) {
        return this.http.post(`https://jsonplaceholder.typicode.com/todos`, data);
    }
    putTodoData(data: any) {
        return this.http.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`, data);
    }
    deleteTodoData(todoId: number = 1) {
        return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    }
}