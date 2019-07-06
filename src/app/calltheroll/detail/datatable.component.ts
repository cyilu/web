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
export class DetailComponet implements OnInit {
  data:LocalDataSource = new LocalDataSource();
  condition = {
    name:''
  }

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    $.ajax({
      url: "http://"+domain+":3000/rolldetail",
      data: {
        ref:window.sessionStorage.getItem('ref'),
        id:window.sessionStorage.getItem('courseid')
      },
      type: "GET",
      dataType: "json",
      async : false, 
      success:  (d) =>  {
        this.data.load(d.data);
      }
    });
  }

  // search(){
  //   console.log(window.sessionStorage.getItem('ref'))
  //   $.ajax({
  //     url: "http://"+domain+":3000/rolldetail",
  //     data: {
  //       ref:window.sessionStorage.getItem('ref'),
  //       name:this.condition.name
  //     },
  //     type: "GET",
  //     dataType: "json",
  //     async : false, 
  //     success:  (d) =>  {
  //       this.data.load(d.data);
  //     }
  //   });
  // }

  ngOnInit() {
    var that = $(this)
    this.parent.setActiveByPath("calltheroll", this.parent.datatable);
    
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
      name:{
        title:"姓名"
      },
      school:{
        title:"学校"
      },
      coursename: {
        title: '课程名'
      },
      calldate: {
        title: '点名时间'
      },
      callposition: {
        title: '点名地点'
      },
      dname: {
        title: '点名状态'
      }
    },
    mode : "inline",
    actions:{
      edit:false,
      delete:false,
      add:false
    }
  };

  onDeleteConfirm(event): void {
    // console.log(event.data.id);
    // window.sessionStorage.setItem('courseid', event.data.id);
    // window.location.href="/#/main/3/rolldetail";
    // event.confirm.resolve();
    // console.log("delete function");
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }
  
}
