import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// MODULES
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './shared-module/shared-module.module'; 

// PICTURE PARK
import {
  PICTUREPARK_CONFIGURATION,
  PictureparkAccessTokenAuthConfiguration,
  AccessTokenAuthService,
  AuthService
} from '@picturepark/sdk-v1-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModuleModule
  ],
  providers: [
    { provide: AuthService, useClass: AccessTokenAuthService },
    {
      provide: PICTUREPARK_CONFIGURATION, useValue: <PictureparkAccessTokenAuthConfiguration>{
        apiServer: 'https://api.01.qa-picturepark.com',
        customerAlias: 'localtest',
        accessToken: 'd2feec3b69871925d2738171ad14cc074975c54ebb1e4f62836a8b8a0779ae55'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
