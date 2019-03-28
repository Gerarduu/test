import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ItemsService } from "../services/items-service/items.service";

@Component({
  selector: "app-favourites-dialog",
  templateUrl: "./favourites-dialog.component.html",
  styleUrls: ["./favourites-dialog.component.css"]
})
export class FavouritesDialogComponent implements OnInit {
  itemsList: any = [];
  filteredItemsList: any = [];
  searchText: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.setFavourites();
  }

  setFavourites() {
    this.itemsList = this.itemsService.getItemsList();
    this.filteredItemsList = this.itemsList;
  }

  setFavourite(item) {
    this.itemsService.setFavourite(item);
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
