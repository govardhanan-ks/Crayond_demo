import { Component, OnInit } from '@angular/core';
import { user } from "../list-user/user";
import { Router } from "@angular/router"; 
import { UserService } from '../user.service'
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  isvalied=false;
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

  verify(){
    // debugger;
    if(this.user.Password === this.user.Conform_password){
     // alert("PASSWORD MISS MATCHED");
     this.isvalied=true;
    }else{
      //alert("hg")
    }


  }
      
 


  saveUser() {

    //this.verify();
    console.log(this.user)
    if(this.isvalied===true){
    this.userService.listUser.push(this.user)
    
    this._router.navigate(['ListUser'])
    }
    else{
      alert("Password is Missmatched")
    }
    
  }

}
