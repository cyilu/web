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

  templateUrl: './newmanager.component.html'
})
export class NewmanagerComponent implements OnInit {

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    
  }

  data ={
    account:"",
    name:""
  }
  ngOnInit() {

  };

  addManager(){
    $.ajax({
      url: "http://"+domain+":3000/addManager",
      data: {
        account:this.data.account,
        name:this.data.name
      },
      type: "POST",
      dataType: "json",
      async : false, 
      success: (d) =>  {
        if(d.message == 1){
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
