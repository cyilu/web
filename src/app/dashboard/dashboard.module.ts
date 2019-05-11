import { Component, OnInit,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PaginationModule } from 'ng2-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';


import { NavComponent } from './nav.component';
import { DashboardComponent } from './dashboard.component';
import { lineChartsComponent } from '../charts/lineCharts/lineCharts.component';
import { pieChartsComponent } from '../charts/pieCharts/pieCharts.component';
import { DatatableComponent } from '../tables/datatable/datatable.component';
import { BootstrapComponent } from '../bootstraps/static/bootstrap.component';
import { PluginComponent } from '../bootstraps/plugin/plugin.component';
import { ManagerinfoComponet } from '../managerinfo/info/datatable.component';
import { LimitationComponent } from '../managerinfo/limitation/limitation.component';
import { NewmanagerComponent} from '../managerinfo/newmanager/newmanager.component';
import { DepartmentListComponet} from '../department/list/list.component';
import { DepartmentTreeComponet} from '../department/tree/tree.component';
import { StudentComponet } from '../student/info/datatable.component';
import { CourseInfoComponet } from '../course/info/datatable.component';
import { CalltheRollInfoComponet } from '../calltheroll/info/datatable.component';
import { CalltheRollStudentInfoComponet } from '../calltheroll/forstudent/datatable.component';

const tablesRoutes: Routes = [
    {
        path:'main/:id',
        component:NavComponent,
        children: [
           { path: '', component: DashboardComponent },
           { path: 'dashboard', component: DashboardComponent },
           { path: 'lineCharts', component: lineChartsComponent },
           { path: 'pieCharts', component: pieChartsComponent },
           { path: 'datatable', component: DatatableComponent },
           { path: 'bootstrap-static', component: BootstrapComponent },
           { path: 'bootstrap-plugin', component: PluginComponent },
           { path: 'managerinfo', component:ManagerinfoComponet},
           { path: 'limitation', component:LimitationComponent},
           { path: 'newmanager', component:NewmanagerComponent},
           { path: 'departmentlist', component:DepartmentListComponet},
           { path: 'departmenttree',  component:DepartmentTreeComponet},
           { path: 'studentinfo', component:StudentComponet},
           { path: 'courseinfo', component:CourseInfoComponet},
           { path: 'calltherollinfo', component:CalltheRollInfoComponet},
           { path: 'calltherollstudentinfo', component:CalltheRollStudentInfoComponet}
        ]
    }
]


@NgModule({
  imports: [
      FormsModule,
      CommonModule,
      RouterModule.forChild(tablesRoutes),
      ChartsModule,
      PaginationModule.forRoot(),
      Ng2SmartTableModule,
      FileUploadModule
  ],
  declarations: [
    NavComponent,
    DashboardComponent,
    lineChartsComponent,
    pieChartsComponent,
    DatatableComponent,
    BootstrapComponent,
    PluginComponent,
    ManagerinfoComponet,
    LimitationComponent,
    NewmanagerComponent,
    DepartmentListComponet,
    StudentComponet,
    CourseInfoComponet,
    CalltheRollInfoComponet,
    CalltheRollStudentInfoComponet
  ],
  providers: []
})
export class DashboardModule { }
