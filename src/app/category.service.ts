import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string = "http://localhost:3000/category"
  constructor(public http:HttpClient) { }

  loadAllCategoryInformation():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.baseUrl);
  }

  // store data in json file using post
  // 1st parameter url
  // 2nd parameter is object in json format
  storeCategoryDetails(category:any):any
  {
    return this.http.post(this.baseUrl,category);
  }
}
