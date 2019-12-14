import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ColumnComponent }  from './column/column.component'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  private _columns = new Map<any, any>()
  
  columns: ColumnComponent[]

  constructor() {

  }

  ngOnInit() {
    console.log(this.columns)
  }

  ngAfterViewInit() {
    console.log(this.columns)
  }

  setColumn(header: string, column: ColumnComponent) {
    this._columns.set(header, column);

    this.columns = Array.from(this._columns.values())


  }
}