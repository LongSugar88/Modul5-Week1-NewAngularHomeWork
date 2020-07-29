import {Component, OnInit} from '@angular/core';
import {IUser} from "./new-templet/iuser";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'newAngular';
  constructor(private userService : UserService) {
  }
  keyword : string;
  userFilter = [];
  allUser = [];

  ngOnInit(): void {
    this.userFilter = this.userService.getAllUser();
    this.allUser = this.userService.getAllUser();

  }


  search(event){
    this.userFilter = (event)? this.filterByKeyWord(event) : this.userService.getAllUser();
  }
  filterByKeyWord(keyword){
    return this.userService.getAllUser().filter(user => {
      return user.name.indexOf(keyword) != -1;
    })
  }


}
