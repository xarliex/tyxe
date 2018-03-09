import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ListcompaniesComponent } from './listcompanies/listcompanies.component';
import { CompanyComponent } from './company/company.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { NeworderComponent } from './neworder/neworder.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'user/edit/:id', component: EdituserComponent},
    { path: 'companies/list', component: ListcompaniesComponent},
    { path: 'companies/newcompany', component: NewcompanyComponent},
    { path: 'companies/:id', component: CompanyComponent},
    { path: 'companies/edit/:id', component: EditcompanyComponent},
    { path: 'order/:id', component: OrderComponent},
    { path: 'trade/:id', component: NeworderComponent},
    { path: 'orders/company/:id', component: OrderlistComponent},
    { path: '**', redirectTo: '' }
];

