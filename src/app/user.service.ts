import { Injectable } from '@angular/core';
import {IUser} from "./new-templet/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  Users: IUser[] = [
    {
      id : 1,
      name : 'Long',
      gender : 'Male',
      email: "long@gmail.com"
    },
    {
      id : 2,
      name : 'Trung',
      gender : 'Male',
      email: "trung@gmail.com"
    },
    {
      id : 3,
      name : 'Tuan',
      gender : 'Male',
      email: "tuan@gmail.com"
    },
    {
      id: 4,
      name : 'Doan',
      gender : 'Male',
      email : 'doan@gmail.com'
    }
  ]
  getAllUser(){
    return this.Users;
  }
  createUser(user : IUser){
    return this.Users.push(user)
  }
}
