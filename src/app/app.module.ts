import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyBlplc8xQzPs8EOxTrLg6kTJ4ZK_ZUImwY',
    authDomain: 'ngfbauth-f981a.firebaseapp.com',
    databaseURL: 'https://ngfbauth-f981a.firebaseio.com',
    projectId: 'ngfbauth-f981a',
    storageBucket: 'ngfbauth-f981a.appspot.com',
    messagingSenderId: '825631089346'
};

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        RouterModule.forRoot(routes)
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
