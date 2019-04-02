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
  @Output() onFavouriteAddRm = new EventEmitter();
  message: string = "";

  constructor(
    public itemsService: ItemsService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  setFavourite() {
    if (this.item.favourite == false) {
      this.message = "added to favourites";
    } else {
      this.message = "removed from favourites";
    }

    this.itemsService.setFavourite(this.item);
    this.onFavouriteAddRm.emit({ inItem: this.item });
    this.showSnackBar(this.message, "Dismiss", this.item);
  }

  showSnackBar(message, action, inItem?) {
    this.snackBar.open(inItem.title + " was " + message, action, {
      duration: 2000
    });
  }
}
