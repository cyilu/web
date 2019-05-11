import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import Swal from 'sweetalert2'
var domain = window.location.hostname;
//declare var $:JQueryStatic;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) {
    
  }

  mana={
    account:"",
    password:""
  }

  toRegister() {
    console.log('go register');
    window.location.href = '#/register';
  }

  login(){
    console.log(this.mana);
    $.ajax({
      url: "http://"+domain+":3000/loginManager",
      data: {
        account:this.mana.account,
        password:this.mana.password
      },
      type: "POST",
      dataType: "json",
      success: (data) => {
        console.log(data);
        if(data.message == 1){
          window.sessionStorage.setItem('role', data.data.role); 
          window.sessionStorage.setItem('ref', data.data.ref); 
          if (data.data.role == 1){
            window.location.href = '#/main/1';
          }
          if (data.data.role == 2)
            window.location.href = '#/main/2';
          if (data.data.role == 3)
            window.location.href = '#/main/3';
        }else{
          Swal.fire({
            //position: 'top-end',
            type: 'error',
            title: '用户名或密码错误！',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    });
  }

  ngOnInit(){
    console.log("Start ngOnInit "+domain);
  };



}
