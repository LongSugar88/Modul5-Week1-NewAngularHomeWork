import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "./iuser";

@Component({
  selector: 'app-new-templet',
  templateUrl: './new-templet.component.html',
  styleUrls: ['./new-templet.component.scss']
})
export class NewTempletComponent implements OnInit {

  @Output() keyword: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  Users;
  @Input()
  userFilter;

  getKeyWord(event) {
    let value = event.target.value;
    this.keyword.emit(value)
  }

}
