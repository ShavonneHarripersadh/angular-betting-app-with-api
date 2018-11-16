import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {AccordionModule} from 'ngx-accordion';
import {BetService} from './services/bet.service';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BetlistComponent } from './components/betlist/betlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BetlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [BetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
