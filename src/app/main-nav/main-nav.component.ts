import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatDialog } from "@angular/material";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { ItemsService } from "../services/items-service/items.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent {
  favouritesCounter: any = 0;
  searchText: any;
  itemsList: any;
  @Input() filteredItemsList: any;
  @Input() counter: any;
  @Output() onFiltersChange = new EventEmitter();

  constructor(public dialog: MatDialog, private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsList = this.filteredItemsList;
    this.counter = 0;
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

  filterItems() {
    if (
      this.searchText == "" ||
      this.searchText == undefined ||
      this.searchText == null
    ) {
      this.filteredItemsList = this.itemsList;
    } else {
      this.filteredItemsList = [];

      this.itemsList.forEach(item => {
        if (
          item.filter1.includes(this.searchText) ||
          item.filter2.includes(this.searchText) ||
          item.filter3.includes(this.searchText) ||
          item.filter4.includes(this.searchText)
        ) {
          this.filteredItemsList.push(item);
        }
      });
    }
    //this.itemsService.setItemsList(this.filteredItemsList);
    this.onFiltersChange.emit({ filteredItemsList: this.filteredItemsList });
    console.log("filteredItems: ", this.filteredItemsList);
  }
}
