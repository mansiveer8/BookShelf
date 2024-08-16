import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BookstoreService } from '../../../bookstore.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  emailId: string= '';
  isShowChangePassword: boolean = false;
  newPassword: string = '';
  user: any;

  constructor(
    private bservice: BookstoreService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const body = {
      emailId: this.emailId
    };
    this.bservice.forgotPassword(body).pipe(take(1)).subscribe((res) => {
      if (!!res && res?.userId) {
        this.user = res;
        this.isShowChangePassword = true;
      }
    }, err => {
      this.isShowChangePassword = false;
      alert("User not found . Please enter valid email.")
    });
  }

  onChangePassword(): void {
    this.user.password = this.newPassword;
    this.bservice.changePassword(this.user?.userId,this.newPassword).pipe(take(1)).subscribe((res) => {
      if (res && res.userId) {
        alert("Password changed successfully");
        this.route.navigate(["/user-login"]);
      }
    }, error => {
      alert("Error occured while changing password.");
    });
  }
}
