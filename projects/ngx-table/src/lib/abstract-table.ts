import { ColumnComponent } from './column/column.component';


export abstract class AbstractTable {

  private _columns = new Map<any, any>()
  columns: ColumnComponent[]

  setColumn(header: string, column: ColumnComponent) {
    this._columns.set(header, column);
    this.columns = Array.from(this._columns.values())
  }
}
