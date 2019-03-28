import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  private itemsList: any = [];
  public favouriteCounter: number = 0;

  constructor(private http: HttpClient) {}

  public getItemsListInit(): Promise<any> {
    return Promise.resolve(this.getJSON()).then(data => {
      this.itemsList = data.items;
      return this.itemsList;
    });
  }

  private getJSON(): Promise<any> {
    return this.http.get("../../assets/items.json").toPromise();
  }

  public getItemsList() {
    return this.itemsList;
  }

  public setItemsList(inItemsList) {
    this.itemsList = inItemsList;
  }

  public setFavourite(inItem) {
    for (let i = 0; i < this.itemsList.length; i++) {
      if (this.itemsList[i].id == inItem.id) {
        if (this.itemsList[i].favourite == false) {
          this.itemsList[i].favourite = true;
        } else {
          this.itemsList[i].favourite = false;
        }
      }
    }
    this.countFavourites();
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
