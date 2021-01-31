import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserService {
  private _users$ = new BehaviorSubject<User[]>([]);

  get users$() {
    return this._users$.asObservable();
  }

  constructor(private http: HttpClient) {}

  fetchUsers(): void {
    this.http
      .get<{ data: User[] }>("https://reqres.in/api/users")
      .pipe(map(resp => resp.data))
      .subscribe(users => {
        this._users$.next(users);
      });
  }
}