import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxSpinnerModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = 'arlandmichelenav@gmail.com';
  password = 'Arland123';
  linkSuccess = false;

  constructor(
    private auth: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.auth.currentUser.subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/workspace', { replaceUrl: true });
      }
    });
  }

  ngOnInit(): void {
    /*
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);*/
  }

  async signIn() {
    this.spinner.show();
    const result = await this.auth.signInWithEmail(this.email, this.password);

    this.spinner.hide();

    if (!result.error) {
      this.linkSuccess = true;
    } else {
      alert(result.error.message);
    }
  }
}
