import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PainelService } from './painel.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: PainelComponent }]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC9ojFF5V0eHo80iJRwKJVvYEh6vb-f8rk',
      authDomain: 'movim-navios.firebaseapp.com',
      projectId: 'movim-navios',
      storageBucket: 'movim-navios.appspot.com',
      messagingSenderId: '523565532987',
      appId: '1:523565532987:web:fffefcf8b52210c95f991e',
    }),
    AngularFireDatabaseModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    PainelComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PainelService],
})
export class AppModule {}
