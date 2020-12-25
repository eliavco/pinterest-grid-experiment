import { Component, OnInit } from '@angular/core';
var Bricklayer = require('bricklayer');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  arr;

  constructor() { }

  private getSizeArr(n) {
    var foo = [];
    for (var i = 1; i <= n; i++) {
      foo.push(i);
    }
    return foo;
  }

  ngOnInit() {
    this.arr = this.getSizeArr(20);
  }

}