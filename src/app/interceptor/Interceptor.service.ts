import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class InterceptorService{
    constructor(private http:HttpClient){
       
    } 
    getAllUsers(){
        return this.http.get("users");
    }
}