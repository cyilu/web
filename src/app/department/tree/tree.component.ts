import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
//import { TreeModule } from 'angular-tree-component';

@Component({
  selector: 'app',
  templateUrl: './tree.component.html'
})

export class DepartmentTreeComponet implements OnInit{
  constructor(private parent:NavComponent,private route:ActivatedRoute,private router:Router) {
  }
  ngOnInit() {
  };

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',    
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
}