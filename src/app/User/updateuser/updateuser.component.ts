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

  templateUrl: './updateuser.component.html'
})
export class UpdateserComponent implements OnInit {

  user={
    account:"",
    email:"",
    password:"",
    role:""
  }

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    
  }

  updateUser(){
    
    $.ajax({
      url: "http://"+domain+":3000/user",
      data: this.user,
      type: "PUT",
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
