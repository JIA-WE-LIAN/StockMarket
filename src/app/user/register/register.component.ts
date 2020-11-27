import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public username = '';
  public password = '';

  public message = '';
  constructor(private userService: UserService,
              private router: Router) { }

  register() {
    this.userService.register(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully registered');
        this.message = resp.msg;
        this.router.navigate(['login']);
        // 導向目前路徑的父路徑
        // this.router.navigate(['../']);
      }, (err) => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      });
  }
}
