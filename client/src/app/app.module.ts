import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { CompanyService } from '../services/company.service';
import { ListcompaniesComponent } from './listcompanies/listcompanies.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { EdituserComponent } from './edituser/edituser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserComponent,
    EditcompanyComponent,
    ListcompaniesComponent,
    CompanyComponent,
    HomeComponent,
    NewcompanyComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [SessionService, UserService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
