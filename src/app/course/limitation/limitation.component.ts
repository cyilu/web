import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import {NgClass} from '@angular/common';


@Component({
  selector: 'ng2-table',

  templateUrl: './limitation.component.html'
})
export class LimitationComponent implements OnInit {

  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router, private http: Http) {
    
  }

  ngOnInit() {
  };
}
