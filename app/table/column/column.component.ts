import { Component, OnInit, Input } from '@angular/core';
import { TableComponent } from '../table.component'

@Component({
  selector: 'td',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {


  @Input() header: string
  
  constructor(private table: TableComponent) {

  }

  ngOnInit() {
    this.table.setColumn(this.header, this)
  }

}