import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private userAuthservice: UserAuthService) { }


  ngOnInit(): void {
    this.isLogin = this.userAuthservice.UserState;
  }

  login() {
    this.userAuthservice.login('test@test.com', '123456');
    this.isLogin = this.userAuthservice.UserState;
    location.reload();
  }

  logout() {
    this.userAuthservice.logout();
    this.isLogin = this.userAuthservice.UserState;
    location.reload();
  }

}
