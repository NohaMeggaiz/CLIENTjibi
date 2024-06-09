import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Serving/auth.service';
import { LoginRequest } from 'src/app/models copy/LoginRequest';
import { JwtAgentResponse } from 'src/app/models copy/JwtAgentResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe(
      (response) => {
        // Store the JWT token
        localStorage.setItem('token', response.token);

        // Redirect to another page, e.g., dashboard
        this.router.navigate(['/post']);
      },
      (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    );

    }
  }

