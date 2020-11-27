import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username = '';
  public password = '';

  public message = '';
  constructor(private userService: UserService,
              private router: Router) { }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        this.router.navigate(['stocks', 'list'], {
          queryParams: {page: 1}
        });
      }, (err) => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      });
  }
}
