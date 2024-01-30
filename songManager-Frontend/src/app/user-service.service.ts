import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData, ResponseData, UserData, UserRegistration } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  // getUser(type:string){
  //   let  url = "http://localhost:8080/user";
  //    if(key && value ){
  //      url =`http://localhost:3000/users?${key}=${value}`;
  //    }
  //    return this.http.get(url);
  //  }

  addUser(body:UserRegistration):Observable<ResponseData>{
      console.log("enter in add user ")
      return this.http.post<ResponseData>("http://localhost:8080/user", body); 
  }

  loginUser(body:LoginData):Observable<UserData>{
    return this.http.post<UserData>("http://localhost:8080/user/login", body); 
  }
}
