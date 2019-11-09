import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LanguageService } from './services/language.service';
import { DiscountCompanyService } from './services/discount-company.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot()
  ],
  providers: [LanguageService, DiscountCompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
