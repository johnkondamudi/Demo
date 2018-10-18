import { Routes } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ResendCodeComponent } from './resend-code/resend-code.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { JWtTokenComponent } from './jwt-token/jwt-token.component';
import { TableComponent } from './table/table.component';
import { CanBarComponent } from './can-Bar/can-ar.component';
import { CanDonutChartComponent } from './can-donut-chart/can-donut-chart.component';
import { CanlinetChartComponent } from './canlinet-chart/canlinet-chart.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ControlsComponent } from './controls/controls.component';
import { NgxdonutComponent } from './ngxdonut/ngxdonut.component';
import { ApiCallComponent } from './api-call/api-call.component';


export const appRoutes: Routes = [
    
    {path: 'Home', component: HomeComponent},  
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'forgot', component: ForgotPasswordComponent},
    {path: 'forgot/:email', component: ForgotPassword2Component},
    { path: 'newpassword', component: NewPasswordComponent},
    { path: 'confirm/:username', component: ConfirmPasswordComponent},
    { path: 'resend', component: ResendCodeComponent},
    { path: 'ChangePassword', component: ChangepasswordComponent},
    { path: 'jwt', component: JWtTokenComponent},
    { path: 'Table', component: TableComponent},
    { path: 'CBar', component: CanBarComponent},
    { path: 'CDon', component: CanDonutChartComponent},
    { path: 'CLine', component: CanlinetChartComponent},
    { path: 'StatusBar', component: StatusBarComponent},
    { path: 'Control', component: ControlsComponent},
    { path: 'ngxDonut', component: NgxdonutComponent},
    { path: 'Api', component: ApiCallComponent},
    
   
  
    
];