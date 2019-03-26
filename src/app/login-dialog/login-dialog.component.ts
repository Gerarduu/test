import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ItemsService } from "../services/items-service/items.service";

@Component({
  selector: "app-login-dialog",
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.css"]
})
export class LoginDialogComponent implements OnInit {
  itemsList: any = [];
  filteredItemsList: any = [];
  searchText: string;
  @Output() onFavouriteRm = new EventEmitter();

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.setFavourites();
  }

  setFavourites() {
    this.itemsList = this.itemsService.getItemsList();
    this.filteredItemsList = this.itemsList;
    console.log("favouritesComponent: ", this.itemsList);
  }

  setFavourite(item) {
    this.itemsService.setFavourite(item);
    //this.onFavouriteRm.emit();
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
          item.filter3.includes(this.searchText)
        ) {
          this.filteredItemsList.push(item);
        }
      });
    }
    //this.itemsService.setItemsList(this.filteredItemsList);
    //this.onFiltersChange.emit({ filteredItemsList: this.filteredItemsList });
    console.log("filteredItems: ", this.filteredItemsList);
  }
}
