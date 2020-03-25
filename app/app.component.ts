import { Component } from "@angular/core";
import Faker from "faker";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  table1: {
    data: object[];
    headers: string[];
  } = { data: [], headers: [] };

  constructor() {
    this.addColumn();
    this.addColumn();
    this.addColumn();
    this.addData();
    this.addData();
    this.addData();
  }

  addData() {
    this.table1 = {
      ...this.table1,
      data: [...this.table1.data, {}].map((c: object) => 
        this.table1.headers.reduce((acc, h) => ({ ...acc, [h]: Faker.random.word() }), {})
      ),
    }
  }

  addColumn() {
    const newColName = `col-${this.table1.headers.length}`;
    const headers = [...this.table1.headers, newColName];
    this.table1 = {
      ...this.table1,
      headers,
    };
  }
}
