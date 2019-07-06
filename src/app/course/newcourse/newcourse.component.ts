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

  templateUrl: './newcourse.component.html'
})
export class NewcourseComponent implements OnInit {

  con = {
    courseid:"",
    name:"",
    class:"",
    time:"",
    week:"",
    number:""

  }

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    
  }
  ngOnInit() {

  };

  add(){
    $.ajax({
      url: "http://"+domain+":3000/course",
      data: {
        courseid:this.con.courseid, 
        class:this.con.class,
        name:this.con.name,
        ref:window.sessionStorage.getItem('ref'),
        time:this.con.time,
        week:this.con.week,
        number:this.con.number,
      },
      type: "POST",
      dataType: "json",
      async : false, 
      success: (d) =>  {
        if(d.data == 1){
          Swal.fire({
            type: 'success',
            text:'添加成功'
          });
          //window.location.href="/#/main/1/userinfo";
        }else{
          Swal.fire({
            type: 'error',
            text:'添加失败'
          });
        }
      }
    });
  }
}
