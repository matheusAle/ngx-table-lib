import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, forwardRef } from '@angular/core';
import { ColumnComponent }  from './column/column.component'
import { AbstractTable } from './abstract-table';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [
    {
      provide: AbstractTable,
      useExisting: forwardRef(() => TableComponent),
    }
  ]
})
export class TableComponent extends AbstractTable implements OnInit, AfterViewInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
