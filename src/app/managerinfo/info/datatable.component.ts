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
export class ManagerinfoComponet implements OnInit {
  
  // data : LocalDataSource = new LocalDataSource([
  //     {
  //       id: 1,
  //       name: "彭**",
  //       account: "13892893891",
  //       state: "禁用",
  //       creatingTime:"2019-02-15"
  //     }]);
  data = []
  

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    $.ajax({
      url: "http://"+domain+":3000/managerInfo",
      data: {},
      type: "POST",
      dataType: "json",
      async : false, 
      success:  (d) =>  {
        console.log(this.data);
        console.log(d);
        this.data = d.data;
      }
    });
  }

  searchManager(){
    $.ajax({
      url: "http://"+domain+":3000/managerInfo",
      data: {},
      type: "POST",
      dataType: "json",
      async : false, 
      success: (d) =>  {
        console.log(this.data);
        console.log(d);
        this.data = d.data;
      }
    });
  }

  ngOnInit() {
    var that = $(this)
    this.parent.setActiveByPath("managers", this.parent.datatable);
    
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
      id: {
        title: '序号'
      },
      name: {
        title: '姓名'
      },
      account: {
        title: '用户账号'
      },
      state: {
        title: '状态'
      },
      creatingTime: {
        title: '创建时间'
      }
    },
    mode : "inline",
    delete:{
      confirmDelete : true
    }
  };

  // data = [
  //   {
  //     id: 1,
  //     name: "彭**",
  //     account: "13892893891",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 2,
  //     name: "钟**",
  //     account: "18392382391",
  //     state: "激活",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 3,
  //     name: "小二",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 4,
  //     name: "小四",
  //     account: "12391029301",
  //     state: "激活",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 5,
  //     name: "小五",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 6,
  //     name: "小六",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 7,
  //     name: "小七",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 7,
  //     name: "小七",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 7,
  //     name: "小七",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 7,
  //     name: "小七",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 7,
  //     name: "小七",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   },
  //   {
  //     id: 7,
  //     name: "小七",
  //     account: "12391029301",
  //     state: "禁用",
  //     creatingTime:"2019-02-15"
  //   }

  // ];

  onDeleteConfirm(event): void {
    console.log("delete function");
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
}
