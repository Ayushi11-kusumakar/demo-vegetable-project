import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
