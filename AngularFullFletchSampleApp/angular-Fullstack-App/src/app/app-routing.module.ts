import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { DocumentationComponent } from './documentation/documentation.component';


const routes: Routes = [
  { path: '', component: DashboardComponent , pathMatch: 'full'},
  { path: 'authorize', component: AuthorizeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'documentation', component:  DocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
