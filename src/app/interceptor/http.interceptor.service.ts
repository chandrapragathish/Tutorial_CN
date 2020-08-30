import {Injectable} from '@angular/core';
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
 
@Injectable()

export class Http_Interceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler):
    Observable<HttpEvent<any>>{
        console.log(`Interceptor`,req);
        const newReq=req.clone({url:"https://jsonplaceholder.typicode.com/"+req.url,
    headers:req.headers.set('Autherization','chandru')
    });
        return next.handle(newReq)
        .pipe(tap(
            (result)=>console.log('Success',result),
            (error)=>console.log(`Failure ${error}`)
        ));
    }

}