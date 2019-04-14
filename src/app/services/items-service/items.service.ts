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
  public favouriteAlbumsList: any = [];
  public entity: any = "song";

  constructor(private http: HttpClient) {}

  public getDataFromAPI(inSearchText, inEntity) {
    this.entity = inEntity;

    return this.http.get(
      "https://itunes.apple.com/search?term=" +
        inSearchText +
        "&entity=" +
        this.entity +
        ""
    );
  }
}
