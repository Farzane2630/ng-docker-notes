import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { LoginFormType } from '../types';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  loginFormValue: LoginFormType = {
    email: '',
    password: '',
    name: ""
  };

  constructor(private router: Router) {}

  handleSubmit() {
    if (this.loginForm.valid) {
      this.loginFormValue = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        name: this.loginForm.value.email,
      };

      console.log(this.loginFormValue);

      this.router.navigate(['/home-page']);
    }

    console.log('Form is not correctly filled! ');
  }
}
