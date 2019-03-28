import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { FavouritesDialogComponent } from "../favourites-dialog/favourites-dialog.component";
import { ItemsService } from "../services/items-service/items.service";

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

  constructor(public dialog: MatDialog, private itemsService: ItemsService) { }

  ngOnInit() {

    this.itemsList = this.filteredItemsList;
    this.counter = 0;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FavouritesDialogComponent);
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
          item.filter4.includes(this.searchText) ||
          item.filter4.includes(this.searchText.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, ""))
        ) {
          this.filteredItemsList.push(item);
        }
      });
    }
    this.onFiltersChange.emit({ filteredItemsList: this.filteredItemsList });
  }
}
