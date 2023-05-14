import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GameConfigurationModule } from '@code-break/game-configuration';
import { CommonUiModule } from '@code-break/common-ui';
import { ReactiveFormsModule } from '@angular/forms';


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
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
