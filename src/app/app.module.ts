import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { View1Component } from './view1/view1.component';
import { AddcouresComponent } from './addcoures/addcoures.component';

const appRoutes:Routes=[
  {
    path:"",component:AddComponent
  },
  {
    path:"view",component:View1Component
  },
  {
    path:"add",component:AddcouresComponent
  }
  
]
@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    AddComponent,
    View1Component,
    AddcouresComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
