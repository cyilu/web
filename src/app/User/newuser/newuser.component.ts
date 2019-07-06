import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import {NgClass} from '@angular/common';
import * as $ from 'jquery';
import Swal from 'sweetalert2'
var domain = window.location.hostname;

@Component({
  selector: 'ng2-table',

  templateUrl: './newuser.component.html'
})
export class NewuserComponent implements OnInit {

  user={
    account:"",
    email:"",
    password:"",
    role:"",
    school:"",
    name:""
  }
  d={
  datas:[
    {value:1, key:"管理员"},
    {value:2, key:"学生"},
    {value:3, key:"教师"}
  ]
}

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    
  }

  addUser(){
    console.log(this.user)
    $.ajax({
      url: "http://"+domain+":3000/user",
      data: this.user,
      type: "POST",
      dataType: "json",
      async : false, 
      success:  (d) =>  {
        if(d.data == 1){
          Swal.fire({
            type: 'success',
            text:'添加成功'
          });
          window.location.href="/#/main/1/userinfo";
        }else{
          Swal.fire({
            type: 'error',
            text:'添加失败'
          });
        }
      }
    });
    // window.location.href="/#/main/1/userinfo";
  }
  ngOnInit() {
  };
}
