import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PICTURE PARK
import {
  PICTUREPARK_CONFIGURATION,
  PictureparkAccessTokenAuthConfiguration,
  AccessTokenAuthService,
  AuthService
} from '@picturepark/sdk-v1-angular';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    HeaderComponent
  ],
})
export class SharedModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModuleModule,
      providers: [ 
        { provide: AuthService, useClass: AccessTokenAuthService },
        {
          provide: PICTUREPARK_CONFIGURATION, useValue: <PictureparkAccessTokenAuthConfiguration>{
            apiServer: 'https://api.01.qa-picturepark.com',
            customerAlias: 'localtest',
            accessToken: 'd2feec3b69871925d2738171ad14cc074975c54ebb1e4f62836a8b8a0779ae55'
          }
        }
      ]
    };
  }
}
