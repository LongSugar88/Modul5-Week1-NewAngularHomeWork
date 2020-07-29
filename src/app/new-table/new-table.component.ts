import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../new-templet/iuser";

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input()
  allUser;
  @Input()
  userFilter;
  delete(id){
    for( let i=0; i< this.userFilter.length; i++){
      if(this.userFilter[i].id == id){
        this.userFilter.splice(i, 1);
      }
    }
    console.log(id)
  }
  addUser(){
    let newUser : IUser;
    newUser = {
      id : this.userFilter.length,
      name :  (document.getElementById("user_name") as HTMLFormElement).value,
      gender : (document.getElementById("user_gender") as HTMLFormElement).value,
      email : (document.getElementById("user_email") as HTMLFormElement).value
    };
    this.userFilter.push(newUser)
  }
}
