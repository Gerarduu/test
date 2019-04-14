import { Component, Input, ViewChild } from "@angular/core";
import { map } from "rxjs/operators";
import { ItemsService } from "../services/items-service/items.service";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatGridList } from "@angular/material";

@Component({
  selector: "app-main-grid",
  templateUrl: "./main-grid.component.html",
  styleUrls: ["./main-grid.component.css"]
})
export class MainGridComponent {
  itemsList: any = [];
  filteredItemsList: any = [];
  searchText: string;
  fromMainGrid = true;
  counter: number;
  filter: any = "id";
  @ViewChild("grid") grid: MatGridList;

  gridByBreakpoint = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  };

  heightByBreakpoint = {
    xl: 50,
    lg: 50,
    md: 50,
    sm: 50,
    xs: 50
  };

  constructor(
    public itemsService: ItemsService,
    private mediaObserver: ObservableMedia
  ) {}

  ngAfterContentInit() {
    this.mediaObserver.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid.rowHeight = this.heightByBreakpoint[change.mqAlias];
    });
  }

  ngDoCheck() {
    this.filteredItemsList = this.itemsService.itemsList;
  }
}
