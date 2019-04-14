import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Input } from "@angular/core";
import { ItemsService } from "../services/items-service/items.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.css"]
})
export class ItemCardComponent implements OnInit {
  @Input() item: any = {};
  @Input() fromMainGrid: boolean;
  message: string = "";

  constructor(
    public itemsService: ItemsService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  setFavourite() {
    let itemMsg;

    if (this.itemsService.entity == "album") {
      if (
        !this.itemsService.favouriteAlbumsList.find(
          elem =>
            elem.collectionId + elem.collectionType ==
            this.item.collectionId + elem.collectionType
        )
      ) {
        this.itemsService.favouriteAlbumsList.push(this.item);
        this.item.favourite = true;
        this.message = "added to favourites";
      } else {
        let index = this.itemsService.favouriteAlbumsList.indexOf(this.item);

        this.itemsService.favouriteAlbumsList.splice(index, 1);
        this.item.favourite = false;
        this.message = "removed from favourites";
      }

      itemMsg = this.item.collectionName;
    } else {
      if (
        !this.itemsService.favouritesList.find(
          elem => elem.trackId == this.item.trackId
        )
      ) {
        this.itemsService.favouritesList.push(this.item);
        this.item.favourite = true;
        this.message = "added to favourites";
      } else {
        let index = this.itemsService.favouritesList.indexOf(this.item);

        this.itemsService.favouritesList.splice(index, 1);
        this.item.favourite = false;
        this.message = "removed from favourites";
      }

      itemMsg = this.item.trackName;
    }

    this.showSnackBar(this.message, "Dismiss", itemMsg);
  }

  showSnackBar(message, action, inItem?) {
    this.snackBar.open(inItem + " was " + message, action, {
      duration: 2000
    });
  }
}
