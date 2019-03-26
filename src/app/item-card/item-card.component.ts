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
  @Input() item: any;
  @Input() fromMainGrid: boolean;
  @Output() onFavouriteAddRm = new EventEmitter();

  constructor(
    public itemsService: ItemsService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  setFavourite() {
    let message;

    if (this.item.favourite == false) {
      message = "added to favourites";
    } else {
      message = "removed from favourites";
    }

    console.log("itemComponent: ", this.item);

    this.itemsService.setFavourite(this.item);
    this.onFavouriteAddRm.emit();
    this.showSnackBar(message, "Dismiss", this.item);

    console.log(this.item);
  }

  showSnackBar(message, action, inItem?) {
    this.snackBar.open(inItem.title + " was " + message, "Dismiss  ", {
      duration: 2000
    });
  }
}
