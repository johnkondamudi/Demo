import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
//import {AppRoutingModule} from "./app-routing.module";
import{appRoutes} from './routes'
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { ResendCodeComponent } from './resend-code/resend-code.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { JWtTokenComponent } from './jwt-token/jwt-token.component';
import { TableComponent } from './table/table.component';
import { CanBarComponent } from './can-Bar/can-ar.component';
import { CanDonutChartComponent } from './can-donut-chart/can-donut-chart.component';
import { CanlinetChartComponent } from './canlinet-chart/canlinet-chart.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';
import { ControlsComponent } from './controls/controls.component';

import { SelectDropDownModule } from 'ngx-select-dropdown'//dropdown
import {DropdownModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { NgxdonutComponent } from './ngxdonut/ngxdonut.component';


//Ngx-Charts
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { ApiCallComponent } from './api-call/api-call.component';
@NgModule({
  
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ForgotPassword2Component,
    ResendCodeComponent,
    NewPasswordComponent,
    ConfirmPasswordComponent,
    ChangepasswordComponent,
    JWtTokenComponent,
    TableComponent,
    CanBarComponent,
    CanDonutChartComponent,
    CanlinetChartComponent,
    StatusBarComponent,
    ControlsComponent,
    NgxdonutComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  //  AppRoutingModule,
  SelectDropDownModule,
  DropdownModule,
  BrowserAnimationsModule,
  ToastModule,
  NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
