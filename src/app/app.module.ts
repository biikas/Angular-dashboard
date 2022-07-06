import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { NbAuthModule, NbDummyAuthStrategy, NbTokenLocalStorage } from '@nebular/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    AppRoutingModule,
    NbAuthModule.forRoot({
      strategies: [ NbDummyAuthStrategy.setup({ name: 'email' }) ],
    }),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
