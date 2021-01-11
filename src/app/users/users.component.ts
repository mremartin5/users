import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  showWarning: boolean = false;
  warningMsg: string = '';
  showAlert: boolean = false;
  alertMsg: string = '';
  userToRemove: string = '';
  currentuserIdx: number = null;
  

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    let usersUrl = 'https://jsonplaceholder.typicode.com/users';
    this.http.get<any>(usersUrl).subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      err => {
        this.alertMsg = err.message;
        this.showAlert = true;
        console.log(err.message);
      }
    );
  }

  closeAlert = () => {
    this.currentuserIdx = null;
    this.showAlert = false;
  }

  closeWarning = () => {
    this.showWarning = false;
  }

  displayWarningMsg = (i, name) => {
    this.currentuserIdx = i;
    this.userToRemove = name;
    this.showWarning = true;
  }

  removeUser = () => {
    this.users.splice(this.currentuserIdx,1);
    this.showWarning = false;
  }

}
