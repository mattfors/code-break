import { AppComponent } from './app.component';
import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GameConfigurationModule } from '@code-break/game-configuration';
import { CommonUiModule } from '@code-break/common-ui';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    GameConfigurationModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: !isDevMode()
    }),
    CommonUiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
