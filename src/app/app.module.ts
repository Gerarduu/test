//Main
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Angular Material Design
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatBadgeModule
} from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Components
import { AppComponent } from "./app.component";
import { FavouritesDialogComponent } from "./favourites-dialog/favourites-dialog.component";
import { MainGridComponent } from "./main-grid/main-grid.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { MainNavComponent } from "./main-nav/main-nav.component";

//Pagination
import { NgxPaginationModule } from "ngx-pagination";

//ResponsiveLayout
import { FlexLayoutModule } from "@angular/flex-layout";

//Polyfill for normalize("NFD") function in IE11
import "unorm";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainGridComponent,
    FavouritesDialogComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBadgeModule,
    LayoutModule,
    MatSidenavModule,
    HttpClientModule,
    NgxPaginationModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FavouritesDialogComponent]
})
export class AppModule {}
