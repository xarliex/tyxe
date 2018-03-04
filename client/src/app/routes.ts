import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ListcompaniesComponent } from './listcompanies/listcompanies.component';
import { CompanyComponent } from './company/company.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'companies/list', component: ListcompaniesComponent},
    { path: 'companies/newcompany', component: NewcompanyComponent},
    { path: 'companies/:id', component: CompanyComponent},
    { path: 'companies/edit/:id', component: EditcompanyComponent},
    { path: '**', redirectTo: '' }
];

