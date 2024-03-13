import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserAuthService } from '../../../Services/user/user-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnChanges {
  isLogin: boolean = false;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.isLogin = this.userAuthService.UserState;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLogin = this.userAuthService.UserState;
  }


}
