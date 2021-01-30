import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{ data: User[] }>('https://reqres.in/api/users').subscribe(resp => {
      this.users = resp.data;
    });
  }
}
