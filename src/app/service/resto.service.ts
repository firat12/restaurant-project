import { Restaurant } from './../model/restaurant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
    url = "http://localhost:3000/restaurant";

    constructor(private http: HttpClient) {
    }

    getList(){
      return this.http.get(this.url);
    }

    saveRestaurant(body : any) {
      this.http.post(this.url,body);
    }

    removeRestaurant(id : string){
      this.http.delete(this.url+"/"+id);
    }

}
