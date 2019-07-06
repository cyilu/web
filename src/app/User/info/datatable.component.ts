import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import { Ng2SmartTableModule, DataSource, LocalDataSource } from 'ng2-smart-table';
import * as $ from 'jquery';
import Swal from 'sweetalert2'
var domain = window.location.hostname;

@Component({
  selector: 'ng2-table',

  templateUrl: './datatable.component.html'
})
export class UserComponet implements OnInit {
  
  data:LocalDataSource = new LocalDataSource();
  condition = {
    account:''//,
    // sno:'',
    // specialty:''
  }

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    $.ajax({
      url: "http://"+domain+":3000/user",
      data: {
        account:this.condition.account//,
       // role:3
      },
      type: "GET",
      dataType: "json",
      async : false, 
      success:  (d) =>  {
        for(let i=0;i<d.data.length;i++){
          if(d.data[i].role==1){
            d.data[i].role2="管理员"
          }else if(d.data[i].role==2){
            d.data[i].role2="学生"
          }else if(d.data[i].role==3){
            d.data[i].role2="教师"
          }
        }
        this.data.load(d.data);
      }
    });
  }

  searchManager(){
    $.ajax({
      url: "http://"+domain+":3000/user",
      data: {
        account:this.condition.account
        // sno:this.condition.sno,
        // specialty:this.condition.specialty
      },
      type: "GET",
      dataType: "json",
      async : false, 
      success: (d) =>  {
        for(let i=0;i<d.data.length;i++){
          if(d.data[i].role==1){
            d.data[i].role2="管理员"
          }else if(d.data[i].role==2){
            d.data[i].role2="学生"
          }else if(d.data[i].role==3){
            d.data[i].role2="教师"
          }
        }
        this.data.load(d.data);
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
      name:{
        title:"姓名"
      },
      account: {
        title: '用户名'
      },
      email: {
        title: '手机号'
      },
      school:{
        title: '学校'
      },
      role2: {
        title: '角色'
      }
    },
    mode : "inline",
    delete:{
      confirmDelete : true
    },
    edit:{
      confirmSave : true
    },
    add:{
      addButtonContent:"search"
    }
  };
  

  onDeleteConfirm(event): void {
    console.log("delete function");
    Swal.fire({
      type: 'warning', // 弹框类型
      title: '删除信息', //标题
      text: "删除后将无法修改，请谨慎操作！", //显示内容            
  
      confirmButtonColor: '#3085d6',// 确定按钮的 颜色
      confirmButtonText: '确定',// 确定按钮的 文字
      showCancelButton: true, // 是否显示取消按钮
      cancelButtonColor: '#d33', // 取消按钮的 颜色
      cancelButtonText: "取消", // 取消按钮的 文字
  
      focusCancel: true, // 是否聚焦 取消按钮
      reverseButtons: true  // 是否 反转 两个按钮的位置 默认是  左边 确定  右边 取消
    }).then((isConfirm) => {
      try {
          //判断 是否 点击的 确定按钮
          if (isConfirm.value) {
            $.ajax({
              url: "http://"+domain+":3000/user/"+event.data.id,
              data: {},
              type: "DELETE",
              dataType: "json",
              async : false, 
              success:  (d) =>  {
                if(d.data == 1){
                  Swal.fire({
                    type: 'success',
                    text:'删除成功'
                  });
                  event.confirm.resolve();
                  // window.location.href="/#/main/1/userinfo";
                }else{
                  Swal.fire({
                    type: 'error',
                    text:'删除失败'
                  });
                  event.confirm.reject();
                }
              }
            });
          }
          else {
              Swal.fire("取消", "点击了取消", "error");
              event.confirm.reject();
          }
      } catch (e) {
          alert(e);
          event.confirm.reject();
      }
    });
  }
  
  onEditConfirm(event): void {
    console.log("edit dunction");
    console.log(event);
    // if (window.confirm('Are you sure you want to edit?')) {
    Swal.fire({
      type: 'warning', // 弹框类型
      title: '修改信息', //标题
      text: "修改后将替换原信息，请谨慎操作！", //显示内容            
  
      confirmButtonColor: '#3085d6',// 确定按钮的 颜色
      confirmButtonText: '确定',// 确定按钮的 文字
      showCancelButton: true, // 是否显示取消按钮
      cancelButtonColor: '#d33', // 取消按钮的 颜色
      cancelButtonText: "取消", // 取消按钮的 文字
  
      focusCancel: true, // 是否聚焦 取消按钮
      reverseButtons: true  // 是否 反转 两个按钮的位置 默认是  左边 确定  右边 取消
    }).then((isConfirm) => {
      try {
          //判断 是否 点击的 确定按钮
          if (isConfirm.value) {
            $.ajax({
              url: "http://"+domain+":3000/user/"+event.newData.id,
              data: event.newData,
              type: "PUT",
              dataType: "json",
              async : false, 
              success:  (d) =>  {
                if(d.data == 1){
                  Swal.fire({
                    type: 'success',
                    text:'修改成功'
                  });
                  event.confirm.resolve();
                  // window.location.href="/#/main/1/userinfo";
                }else{
                  Swal.fire({
                    type: 'error',
                    text:'修改失败'
                  });
                  event.confirm.reject();
                }
              }
            });
          }
          else {
              Swal.fire("取消", "点击了取消", "error");
              event.confirm.reject();
          }
      } catch (e) {
          alert(e);
          event.confirm.reject();
      }
    });
    // event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }
}
