import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { OurDreamComponent } from './sections/our-dream/our-dream.component';
import { BrushComponent } from './sections/brush/brush.component';
import { CustomerComponent } from './sections/customer/customer.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ShopComponent } from './sections/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeroComponent,
    AboutUsComponent,
    OurDreamComponent,
    BrushComponent,
    CustomerComponent,
    ContactComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
