import { Injectable } from '@angular/core';
import { user } from './list-user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUser:any[]=  [ {
    FirstName: "",
    LastName:"",
    Father_name:"",
    Age:"",
    Gender:"",
    Education:"",
    College_name:"",
    Year:"",
    Country:"",
    City:"",
    Address:"",
    Lane:"",
    Pincode:"",
    Mobile_no:"",
    Mail_id:"",
    Password:"",
    Conform_password:""
  }];
  constructor() { }
}
