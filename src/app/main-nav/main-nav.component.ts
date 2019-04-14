import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { ItemsService } from "../services/items-service/items.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent {
  favouritesCounter: any = 0;
  searchText: any;
  itemsList: any;
  favouritesList: any;
  routing: any = "/";
  entity: any = "song";
  @Input() filteredItemsList: any;
  @Input() counter: any;
  @Output() onFiltersChange = new EventEmitter();
  @ViewChild("searchInput") searchInput: ElementRef;
  @ViewChild("routingBtn") routingBtn;

  constructor(public dialog: MatDialog, private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsList = this.filteredItemsList;
    this.counter = 0;

    Observable.fromEvent(this.searchInput.nativeElement, "keyup") // get value
      .map((evt: any) => evt.target.value)
      .debounceTime(1000)

      .distinctUntilChanged()

      .subscribe(data => {
        console.log("data: ", data);
        this.searchText = data;
        this.filterItems();
      });
  }

  filterItems() {
    if (
      this.searchText != "" &&
      this.searchText != null &&
      this.searchText != undefined
    ) {
      this.itemsService
        .getDataFromAPI(this.searchText, this.entity)
        .subscribe(data => {
          this.itemsList = [];
          this.itemsService.itemsList = [];
          this.itemsList = data;
          this.itemsList = this.itemsList.results;

          console.log("itemsList: ", this.itemsList);

          this.itemsList.forEach(item => {
            if (
              item.artistName
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(
                  this.searchText
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                )
            ) {
              if (this.routing == "/") {
                if (
                  this.itemsService.favouritesList.find(
                    elem => elem.trackId == item.trackId
                  )
                ) {
                  item.favourite = true;
                }
              } else {
                if (
                  this.itemsService.favouriteAlbumsList.find(
                    elem =>
                      elem.collectionId + elem.collectionType ==
                      item.collectionId + elem.collectionType
                  )
                ) {
                  item.favourite = true;
                }
              }

              this.itemsService.itemsList.push(item);
            }
          });
        });
    } else {
      this.itemsService.itemsList = [];
    }
  }

  changeRouting() {
    if (this.routing == "/") {
      this.routing = "/albums";
      this.entity = "album";
    } else {
      this.routing = "/";
      this.entity = "song";
    }

    if (this.searchText != "") {
      setTimeout(() => {
        this.filterItems();
      }, 1000);
    }
  }
}
