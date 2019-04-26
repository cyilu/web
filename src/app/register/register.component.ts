import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
//import { AlertController } from 'ionic-angular'; 
import * as $ from 'jquery';
var domain = window.location.hostname;
//declare var $:JQueryStatic;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  //data = []
  mana={
    account:'',
    email:'',
    password:'',
    password2:''
  }

  show(){
    Swal.fire('Any fool can use a computer');
    // let alert = this.alertCtrl.create({ 
    //   title: 'New Friend!', 
    //   subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!', 
    //   buttons: ['OK'] 
    // }); 
    // alert.present(); 
  }

  register(){
    console.log(this.mana);
    $.ajax({
      url: "http://"+domain+":3000/addManager",
      data: {
        account:this.mana.account,
        email:this.mana.email,
        password:this.mana.password
      },
      type: "POST",
      dataType: "json",
      success: (data)=> {
        console.log(data)
        if(data.message == 1){
          Swal.fire('注册成功');
        }else{
          Swal.fire('注册失败');
        }
      }
    });
  }

  constructor() {
  }

  ngOnInit(){
    console.log("Start register");
  };



}
