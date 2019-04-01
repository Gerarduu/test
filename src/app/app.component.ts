import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { getSymbolIterator } from "@angular/core/src/util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  itemsList: any = [];
  title = "app";

  constructor(public dialog: MatDialog) {}
}
