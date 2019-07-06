import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import { Ng2SmartTableModule, DataSource, LocalDataSource } from 'ng2-smart-table';
import * as $ from 'jquery';
var domain = window.location.hostname;

@Component({
  selector: 'ng2-table',
  templateUrl: './datatable.component.html'
})
export class CourseInfoComponet implements OnInit {
  data:LocalDataSource = new LocalDataSource();
  condition = {
    name:''
  }

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    $.ajax({
      url: "http://"+domain+":3000/qCourse",
      data: {
        ref:window.sessionStorage.getItem('ref'),
        name:this.condition.name
      },
      type: "POST",
      dataType: "json",
      async : false, 
      success:  (d) =>  {
        this.data.load(d.data);
      }
    });
  }

  search(){
    console.log(window.sessionStorage.getItem('ref'))
    $.ajax({
      url: "http://"+domain+":3000/qCourse",
      data: {
        ref:window.sessionStorage.getItem('ref'),
        name:this.condition.name
      },
      type: "POST",
      dataType: "json",
      async : false, 
      success:  (d) =>  {
        this.data.load(d.data);
      }
    });
  }

  ngOnInit() {
    var that = $(this)
    this.parent.setActiveByPath("course", this.parent.datatable);
    
  };
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  public setPaging(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }


  settings = {
    columns: {
      courseid:{
        title:'课程号'
      },
      course_name: {
        title: '课程名'
      },
      class: {
        title: '地点'
      },
      time: {
        title: '时间'
      },
      week: {
        title: '周数'
      },
      number: {
        title: '学生数'
      }
    },
    mode : "inline",
    delete:{
      confirmDelete : true
    },
    add:{
      addButtonContent:"search"
    }
    // },
    // actions:{
    //   add:false
    // }
  };

  onDeleteConfirm(event): void {
    // console.log("delete function");
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }
  
}
