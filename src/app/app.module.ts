import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SeverityComponent } from './severity/severity.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './Services/authentication.service';
import { ServerErrorComponent } from './server-error/server-error.component';
import { UnauthorizedErrorComponent } from './unauthorized-error/unauthorized-error.component';


const appRoutes: Routes=[
  {path:'', component:LoginComponent},
  {path:'checklist', component:ChecklistComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:SeverityComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ChecklistComponent,
    SeverityComponent,
    ServerErrorComponent,
    UnauthorizedErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
