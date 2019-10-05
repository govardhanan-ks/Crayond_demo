import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
 
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  header = ["FirstName",
    "LastName",
    "Father_name",
    "Age",
    "Gender",
    "Education",
    "College_name",
    "Year",
    "Country",
    "City",
    "Address",
    "Lane",
    "Pincode",
    "Mobile_no",
    "Mail_id",
    "Password",
    "Conform_password"
    
    ];

  listedUser = this.userService.listUser

}
