import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ModalScannerComponent } from './Components/modal-scanner/modal-scanner.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInfoComponent,
    UserListComponent,
    UserDetailComponent,
    RecoverPasswordComponent,
    ModalScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgQrScannerModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
