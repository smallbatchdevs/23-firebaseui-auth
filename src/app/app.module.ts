import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }                     from './app-routing.module';
import { AppComponent }                         from './app.component';
import { HomepageComponent }                    from './modules/home/pages/homepage/homepage.component';
import { ViewPostComponent }                    from './modules/home/pages/view-post/view-post.component';
import { EditPostComponent }              from './modules/home/pages/edit-post/edit-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule}                from '@angular/fire';
import {AngularFirestoreModule}                 from '@angular/fire/firestore';
import {environment}                            from '../environments/environment';
import { LoginComponent }                       from './modules/home/pages/login/login.component';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {EditorModule, TINYMCE_SCRIPT_SRC}       from '@tinymce/tinymce-angular';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import {FirebaseuiLoginComponent} from './modules/home/pages/firebaseui-login/firebaseui-login.component';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // {
    //   scopes: [
    //     'public_profile',
    //     'email',
    //     'user_likes',
    //     'user_friends'
    //   ],
    //   customParameters: {
    //     'auth_type': 'reauthenticate'
    //   },
    //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    // },
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewPostComponent,
    EditPostComponent,
    LoginComponent,
    DashboardComponent,
    FirebaseuiLoginComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              ReactiveFormsModule,
              AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
              AngularFirestoreModule, // imports firebase/firestore, only needed for database features
              AngularFireAuthModule,
              EditorModule,
              FormsModule,
              FirebaseUIModule.forRoot(firebaseUiAuthConfig)
            ],
  providers: [AngularFireAuth, { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
