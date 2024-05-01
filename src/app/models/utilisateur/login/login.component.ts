import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  utilisateur: Utilisateur = new Utilisateur();
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];
  private tokenKey = 'auth_token';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.authenticate({
      email: this.utilisateur.email,
      password: this.utilisateur.password
    }).subscribe(
      (response) => {
        // handle successful authentication
        this.isLoggedIn = true;
        localStorage.setItem(this.tokenKey, response.token);
        this.roles = response.roles; // Assuming roles are returned from the server
        this.router.navigate(['/dashboard']);
        console.log('Authentication successful', response);
      },
      (error) => {
        // handle authentication error
        console.error('Authentication error', error);
        this.isLoginFailed = true;
        this.errorMessage = error.message || 'Unknown error';
      }
    );
  }
}
