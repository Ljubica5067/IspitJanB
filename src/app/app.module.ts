import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './comp/product/product.component';
import { PretragaPipe } from './filteri/pretraga.pipe';
import { JedanComponent } from './comp/jedan/jedan.component';
import { DodavanjeComponent } from './comp/dodavanje/dodavanje.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PretragaPipe,
    JedanComponent,
    DodavanjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [Response],
  bootstrap: [AppComponent]
})
export class AppModule { }
