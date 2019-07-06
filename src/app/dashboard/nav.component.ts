import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-charts',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) {}

  para = '';

  public lineCharts = "";
  public pieCharts = "";
  public dashboard = "";
  public datatable = "";
  public bootstrap = "";
  public plugin = "";
  public managerinfo = "";
  public limitation = "";
  public departmentlist = "";
  public departmenttree = "";
  public studentinfo = "";
  public courseinfo = "";
  public calltherollinfo = "";
  public calltherollstudentinfo = "";
  public userinfo="";
  public dicinfo="";

  routers = [];



  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.para=params['id'];
    });

    this.lineCharts = "/main/"+this.para+"/lineCharts";
    this.pieCharts = "/main/"+this.para+"/pieCharts";
    this.dashboard = "/main/"+this.para+"/dashboard";
    this.datatable = "/main/"+this.para+"/datatable";
    this.bootstrap = "/main/"+this.para+"/bootstrap-static";
    this.plugin = "/main/"+this.para+"/bootstrap-plugin";
    this.managerinfo ="/main/"+this.para+"/managerinfo";
    this.limitation = "/main/"+this.para+"/limitation";
    this.departmentlist = "/main/"+this.para+"/departmentlist";
    this.departmenttree = "/main/"+this.para+"/departmenttree";
    this.studentinfo ="/main/"+this.para+"/studentinfo";
    this.courseinfo ="/main/"+this.para+"/courseinfo";
    this.calltherollinfo ="/main/"+this.para+"/calltherollinfo";
    this.calltherollstudentinfo ="/main/"+this.para+"/calltherollstudentinfo";
    this.userinfo ="/main/"+this.para+"/userinfo";
    this.dicinfo = "/main/"+this.para+"/dicinfo"

    if(this.para == '1'){
      this.routers = [
        {
          href: 'managers',
          name: "用户管理",
          type: true,
          child: [
            //{href: this.managerinfo, name: "管理员管理"},
            {href: this.userinfo, name:"用户管理"}//,     
            //{href: this.studentinfo, name: "学生管理"}
          ]
        },
        {
          href: 'partment',
          name: "组织机构管理",
          type: true,
          child: [
            {href: this.departmentlist, name: "组织机构列表"}
          ]
        },
        {
          href: 'dictionary',
          name: "字典管理",
          type: true,
          child: [
            {href: this.dicinfo , name: "字典管理"}
          ]
        }]
    } else if (this.para == '2'){
      this.routers = [
        {
          href: 'calltherollstudent',
          name: "点名管理",
          type: true,
          child: [
            {href: this.calltherollstudentinfo, name: "点名情况"}
          ]
        }]
    } else if (this.para == '3'){
      this.routers = [
        {
          href: 'course',
          name: "课程管理",
          type: true,
          child: [
            {href: this.courseinfo, name: "课程信息"}
          ]
        },
        {
          href: 'calltheroll',
          name: "点名管理",
          type: true,
          child: [
            {href: this.calltherollinfo, name: "点名情况"}
          ]
        }
      ]
    }

  };

  setActiveByPath = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        if (!router.active) {
          router.active = true;
          if (childPath != "") {
            for (var j = 0; j < router.child.length; j++) {
              var route = router.child[j];
              if (route.href == childPath) {
                route.active = true;
              }
            }
          }
        } else {
          router.active = false;
        }
      }
    }
  };
  changeNavStatis = function (path) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        router.active = true;
      }
    }
  };
  changeChildNavStatis = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {

        for (var j = 0; j < router.child.length; j++) {
          var route = router.child[j];
          if (route.href != childPath) {
            route.active = false;
          } else {
            route.active = true;
          }
        }
      }

    }
  };
  getQueryString = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  r[2]; return null;
  }



}
