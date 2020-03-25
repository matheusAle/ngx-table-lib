import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TableComponent } from '../table.component'
import { AbstractTable } from '../abstract-table';

@Component({
  selector: 'ngx-table > td',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnDestroy {


  @Input() header: string

  constructor(private table: AbstractTable) {}

  ngOnInit() {
    this.table.setColumn(this.header, this)
  }

  ngOnDestroy() {
  }

}
