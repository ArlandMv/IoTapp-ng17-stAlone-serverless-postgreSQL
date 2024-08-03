import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';

/*Carlos Morales Dev:Angular y Supabase
  - session() {
    return this.supabase.auth.getSessionFromUrl
  }
  - signUp() 
  - logIn()
  - signOut()

*/

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;
  private _currentUser: BehaviorSubject<boolean | User | any> =
    new BehaviorSubject(null);

  constructor(private router: Router) {
    this.supabase = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_KEY
    );

    const user = this.supabase.auth.user();
    if (user) {
      this._currentUser.next(user);
    } else {
      this._currentUser.next(false);
    }
    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log('event: ', event);
      console.log('session: ', session);

      if (event === 'SIGNED_IN') {
        console.log('SIGNED_IN');
      } else {
        this._currentUser.next(false);
        this.router.navigateByUrl('/', { replaceUrl: true });
      }
    });
  }

  //supabase version 2:
  //  - this.supabase.auth.signInAnonymously();
  //  - this.supabase.auth.signInWithPassword();
  //  - this.supabase.auth.signInWithSSO();
  //  - this.supabase.auth.getSession()

  // Register
  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password,
    });
  }

  signInWithEmail(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password,
    });
  }

  logout() {
    this.supabase.auth.signOut();
  }

  get currentUser() {
    return this._currentUser.asObservable();
  }
}
