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
  @ViewChild("grid") grid: MatGridList;

  filters: any = [
    {
      name: "Title",
      type: [
        { value: "title", value2: "asc", viewValue: "Ascendant" },
        { value: "title", value2: "desc", viewValue: "Descendant" }
      ]
    },
    {
      name: "Email",
      type: [
        { value: "email", value2: "asc", viewValue: "Ascendant" },
        { value: "email", value2: "desc", viewValue: "Descendant" }
      ]
    },
    {
      name: "Price",
      type: [
        { value: "price", value2: "asc", viewValue: "Ascendant" },
        { value: "price", value2: "desc", viewValue: "Descendant" }
      ]
    },
    {
      name: "Description",
      type: [
        { value: "description", value2: "asc", viewValue: "Ascendant" },
        { value: "description", value2: "desc", viewValue: "Descendant" }
      ]
    }
  ];

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  };

  heightByBreakpoint = {
    xl: 115,
    lg: 90,
    md: 95,
    sm: 105,
    xs: 110
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

  ngOnInit() {
    this.getItems();
  }

  ngDoCheck() {
    if (this.counter > 0) {
      if (this.filteredItemsList) {
        if (this.filteredItemsList.length > 0) {
          this.favouriteAddRm();
        }
      }
    }
  }

  getItems() {
    this.itemsService.getItemsListInit().then(data => {
      this.itemsList = data;
      this.setItems();
    });
  }

  setItems() {
    this.itemsList.forEach(function(item, index) {
      item.all = item.title + item.description + item.email + item.price;
      item.filter1 = item.all;
      item.filter2 = item.all.toLowerCase();
      item.filter3 = item.all.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      item.filter4 = item.all
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      item.favourite = false;
      item.id = index;
    });
    this.filteredItemsList = this.itemsList;
  }

  filtersChanged(data: any) {
    this.filteredItemsList = data.filteredItemsList;
  }

  favouriteAddRm(data?: any) {
    this.counter = 0;

    if (data) {
      for (let i = 0; i < this.filteredItemsList.length; i++) {
        if (this.filteredItemsList[i].id == data.inItem.id) {
          if (this.filteredItemsList[i].favourite == false) {
            this.filteredItemsList[i].favourite = true;
            console.log(data.inItem, " now is true");
          } else {
            this.itemsList[i].favourite = false;
            console.log(data.inItem, " now is false");
          }
        }
      }
    }

    for (let i = 0; i < this.filteredItemsList.length; i++) {
      if (this.filteredItemsList[i].favourite == true) {
        this.counter++;
      }
    }
  }

  bubbleSort(inArr, inFilter) {
    let swapp;
    let n = inArr.length - 1;
    let x = inArr;

    do {
      swapp = false;

      if (inFilter == "price") {
        for (let i = 0; i < n; i++) {
          if (parseInt(x[i][inFilter]) > parseInt(x[i + 1][inFilter])) {
            let temp = x[i];
            x[i] = x[i + 1];
            x[i + 1] = temp;
            swapp = true;
          }
        }
      } else {
        for (let i = 0; i < n; i++) {
          if (
            x[i][inFilter]
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") >
            x[i + 1][inFilter]
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) {
            let temp = x[i];
            x[i] = x[i + 1];
            x[i + 1] = temp;
            swapp = true;
          }
        }
      }

      n--;
    } while (swapp);

    return x;
  }

  orderBy(inFilter, inType) {
    this.bubbleSort(this.filteredItemsList, inFilter);

    if (inType == "desc") {
      this.filteredItemsList = this.filteredItemsList.reverse();
    }
  }
}
