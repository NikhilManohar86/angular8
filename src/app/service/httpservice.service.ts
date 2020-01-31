import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map  } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseURL = 'http://dummy.restapiexample.com/api/v1/';

  constructor(private http: HttpClient) { }

  getMethod(endpoint: string){
    return this.http.get(this.baseURL + endpoint);
    // .pipe(map((res:any) => {
    //   return res;
    // }));
  }
}
