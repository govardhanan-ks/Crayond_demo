import { Component, OnInit } from '@angular/core';
import { user } from "../list-user/user";
import { Router } from "@angular/router"; 
import { UserService } from '../user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService:UserService, private _router:Router) { }

  user: user = {
    FirstName: "",
    LastName: "",
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
  } ;

  ngOnInit() {
  }

  saveUser() {
    console.log(this.user)
    this.userService.listUser.push(this.user)
    
    this._router.navigate(['ListUser'])
  }

}
