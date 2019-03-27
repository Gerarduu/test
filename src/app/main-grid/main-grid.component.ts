import { Component, Input } from "@angular/core";
import { map } from "rxjs/operators";
import {
  Breakpoints,
  BreakpointState,
  BreakpointObserver
} from "@angular/cdk/layout";
import { ItemsService } from "../services/items-service/items.service";
import { filterQueryId } from "@angular/core/src/view/util";

@Component({
  selector: "app-main-grid",
  templateUrl: "./main-grid.component.html",
  styleUrls: ["./main-grid.component.css"]
})
export class MainGridComponent {
  itemsList: any = [];
  filteredItemsList: any = null;
  searchText: string;
  rows: any;
  fromMainGrid = true;
  counter: number;
  filter: any;

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

  constructor(public itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems();
  }

  ngDoCheck() {
    if (this.counter > 0) {
      if (this.filteredItemsList) {
        if (this.filteredItemsList.length > 0) {
          this.favouriteAddRm("");
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
      item.filter4 = item.all.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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

  favouriteAddRm(data: any) {
    this.counter = 0;

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

      console.log("inFilterBubble: ", inFilter);

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
