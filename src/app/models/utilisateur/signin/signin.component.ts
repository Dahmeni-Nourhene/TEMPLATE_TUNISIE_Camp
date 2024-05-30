import { Component } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  utilisateur: Utilisateur = new Utilisateur();
  
  isRegistrationFailed: boolean = false;
  errorMessage: string = '';

  constructor( private authService: AuthService, private router: Router) {}
    registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+@[a-zA-Z]+\\.[a-zA-Z]{2,}$')]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      nom: new FormControl ('', Validators.required),
      prenom: new FormControl ('', Validators.required)
    });
  
  register(): void {
    this.utilisateur.role = "Administrateur";
    this.authService.register(this.utilisateur).subscribe(
      () => {
        // handle successful registration
        this.router.navigate(['/login']);
        console.log('Registration successful');
      },
      (error) => {
        // handle registration error
        console.error('Registration error', error);
        this.isRegistrationFailed = true;
        this.errorMessage = error.message || 'Unknown error';
      }
    );
  }
}