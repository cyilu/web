import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import {NgClass} from '@angular/common';


@Component({
  selector: 'ng2-table',

  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {

  tableData = [
    {id: 1, username: 'Geek', age: 42, salary: 1234},
    {id: 2, username: 'TOM', age: 52, salary: 2345.64},
    {id: 3, username: 'King', age: 51, salary: 8888},
    {id: 4, username: 'QuEEN', age: 12, salary: 6663},
    {id: 5, username: 'JACK', age: 13, salary: 4567},
    {id: 6, username: 'KGC', age: 15, salary: 9870.123},
    {id: 7, username: 'rose', age: 23, salary: 3456.78},
    {id: 8, username: 'john', age: 78, salary: 6234},
    {id: 9, username: 'lily', age: 56, salary: 7234},
    {id: 10, username: 'hello', age: 34, salary: 8234},
    {id: 11, username: 'james', age: 58, salary: 9234}
  ];
  //data=[];
  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    
  }

  ngOnInit() {
    this.parent.setActiveByPath("tables", this.parent.datatable);
    /*console.log("Start constructor");
    this.http.get('localhost:3000/testing').map(res => res.json()).subscribe(res => {
      this.data = res.data;
      console.log(this.data);
    });*/
  };
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  public setPage(pageNo: number): void {
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

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      account: "Bret",
      state: "禁用",
      creatingTime:"2019-02-15"
    },
    {
      id: 2,
      name: "Leanne Graham",
      account: "Bret",
      state: "激活",
      creatingTime:"2019-02-15"
    },
    {
      id: 3,
      name: "Leanne Graham",
      account: "Bret",
      state: "禁用",
      creatingTime:"2019-02-15"
    },
    {
      id: 4,
      name: "Leanne Graham",
      account: "Bret",
      state: "激活",
      creatingTime:"2019-02-15"
    },
    {
      id: 5,
      name: "Leanne Graham",
      account: "Bret",
      state: "禁用",
      creatingTime:"2019-02-15"
    }
  ];

  onDeleteConfirm(event): void {
    console.log("delete function");
    /*if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }*/

  }
  
  /*startData();  

  startData():void{
    
  }*/
  
}
