import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './i-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_url : string = "http://localhost:3000/Users"

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<IUser[]>(this.base_url);
  }

  postData(data: IUser){
    return this.http.post(this.base_url, data)
  }

  getDataById(id: number){
    return this.http.get<IUser>(`${this.base_url}/${id}`);
  }

  putDataById(id: number, data: IUser){
    return this.http.put(`${this.base_url}/${id}`, data);
  }

  deleteData(id: number){
    return this.http.delete(`${this.base_url}/${id}`)
  }
}
