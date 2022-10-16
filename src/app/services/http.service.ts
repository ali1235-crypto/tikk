import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  send(data:any):Observable<any>{
    return this.http.post('https://dbpass-baf8.restdb.io/rest/pass',data,{
      withCredentials:false,
      headers:{
        "content-type":"application/json",
        "x-apikey":"634be241626b9c747864ac84",
        "cache-control": "no-cache"
      }
    }).pipe(
      map((res: any) => {
           return res;

      }),
      catchError(error => {

          return error
      })
  )
  }
}
