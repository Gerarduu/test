import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  public itemsList: any = [];
  public favouritesList: any = [];
  public favouriteCounter: number = 0;

  constructor(private http: HttpClient) {}

  public getItemsListInit() {}

  public getDataFromAPI(inSearchText) {
    return this.http.get(
      "https://itunes.apple.com/search?term=" + inSearchText + "&entity=song"
    );
  }

  public getItemsList() {
    return this.itemsList;
  }

  public setItemsList(inItemsList) {
    this.itemsList = inItemsList;
  }

  public setFavourite(inItem) {
    if (!this.favouritesList.find(elem => elem.trackId == inItem.trackId)) {
      this.favouritesList.push(inItem);
    }

    console.log("favouritesList: ", this.favouritesList);
  }

  countFavourites() {
    this.favouriteCounter = 0;
    for (let i = 0; i < this.itemsList.length; i++) {
      if (this.itemsList[i].favourite == true) {
        this.favouriteCounter++;
      }
    }
    return this.favouriteCounter;
  }

  getFavouriteCounter() {
    return this.favouriteCounter;
  }
}
