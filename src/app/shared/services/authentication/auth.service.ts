import {Injectable, NgZone} from '@angular/core';
import {Observable}         from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth}            from 'firebase/app';
import {Router}           from '@angular/router';
import {shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private smallBatchDevsEmail = 'smallbatchdevs@gmail.com';

  public user$: Observable<firebase.User> = this.afAuth.user.pipe(shareReplay(1));

  constructor(private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) { }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((res) => {
        console.log('AuthService::Successful Google login', res);
        return this.ngZone.run(() => this.router.navigate(['/']));
        }).catch(err => {
        console.log('AuthService::Failed Google login', err);
      });
  }

  signInWithGithub() {
    return this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then((res) => {
        console.log('AuthService::Successful Github login', res);
        return this.ngZone.run(() => this.router.navigate(['/']));
      }).catch(err => {
        console.log('AuthService::Failed Github login', err);
      });
  }

  signInWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('AuthService::Successful Email login', res);
        return this.ngZone.run(() => this.router.navigate(['/']));
      });
  }

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  isSmallBatchDevsLoggedIn(): boolean {
    return this.afAuth.auth.currentUser && this.afAuth.auth.currentUser.email === this.smallBatchDevsEmail;
  }

  logout() {
    this.afAuth.auth.signOut().then(
      this.router.navigate['/']
    );
  }

  // Not Yet Implemented
  signInWithTwitter() {
    return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider())
      .then((res) => {
        console.log('AuthService::Successful Twitter login', res);
        return this.ngZone.run(() => this.router.navigate(['/']));
      }).catch(err => {
        console.log('AuthService::Failed Twitter login', err);
      });
  }

  // Not Yet Implemented
  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then((res) => {
        console.log('AuthService::Successful Facebook login', res);
        return this.ngZone.run(() => this.router.navigate(['/']));
      }).catch(err => {
        console.log('AuthService::Failed Facebook login', err);
      });
  }

}
