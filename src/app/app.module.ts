import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing}        from './app.routing';
//import { TreeModule } from 'angular-tree-component';
//import { TreeModule } from 'ng2-tree';
//import { TreeModule } from 'ng2tree-common';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {AppComponent} from './app.component';
import {AnalysisComponent} from './module/view.analysis';
import {LoginComponent} from './login/login.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {RegisterComponent} from './register/register.component';
import {DepartmentTreeComponet} from './department/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentTreeComponet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    DashboardModule,
    Ng2SmartTableModule//,
    //TreeModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
