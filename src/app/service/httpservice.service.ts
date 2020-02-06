import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map  } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseURL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getMethod(endpoint: string){
    return this.http.get(this.baseURL + endpoint);
    // .pipe(map((res:any) => {
    //   return res;
    // }));
  }
  postMethod(endpoint: string, data: any){
    return this.http.post(this.baseURL + endpoint, data).pipe(map((res:any) => {
      return res;
    }));
  }
}
