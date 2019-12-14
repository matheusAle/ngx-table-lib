import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, ColumnComponent],
  exports: [TableComponent, ColumnComponent]
})
export class TableModule { }