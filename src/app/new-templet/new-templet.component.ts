import { Component, OnInit } from '@angular/core';
import {IUser} from "./iuser";

@Component({
  selector: 'app-new-templet',
  templateUrl: './new-templet.component.html',
  styleUrls: ['./new-templet.component.scss']
})
export class NewTempletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.Users
  }
  Users: IUser[] = [
    {
      id : 1,
      name : 'Long',
      email: "long@gmail.com"
    },
    {
      id : 2,
      name : 'Trung',
      email: "trung@gmail.com"
    },
    {
      id : 3,
      name : 'Tuan',
      email: "tuan@gmail.com"
    }
  ]
  userFilter = [];
  search(event){
    let keyWord = event.target.value;

    this.userFilter = (keyWord)? this.filterByKeyWord(keyWord) : this.Users;
  }
  filterByKeyWord(keyword){
    return this.Users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    })
  }
  delete(id){
    this.userFilter.splice(id, 1);
  }


}
