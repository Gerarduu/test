import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ItemsService } from "../services/items-service/items.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-favourites-dialog",
  templateUrl: "./favourites-dialog.component.html",
  styleUrls: ["./favourites-dialog.component.css"]
})
export class FavouritesDialogComponent implements OnInit {
  itemsList: any = [];
  filteredItemsList: any = [];
  searchText: string;

  constructor(private itemsService: ItemsService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.setFavourites();
  }

  setFavourites() {
    this.itemsList = this.itemsService.getItemsList();
    this.filteredItemsList = this.itemsList;
  }

  setFavourite(item) {
    this.itemsService.setFavourite(item);
    this.showSnackBar("removed from favourites", "Dismiss", item);
  }

  showSnackBar(message, action, inItem?) {
    this.snackBar.open(inItem.title + " was " + message, action, {
      duration: 2000
    });
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
          item.title.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(this.searchText.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""))
        ) {
          this.filteredItemsList.push(item);
        }
      });
    }
  }
}
