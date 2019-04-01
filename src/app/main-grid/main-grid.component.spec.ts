import {
  fakeAsync,
  ComponentFixture,
  TestBed,
  async
} from "@angular/core/testing";

import { FormsModule } from "@angular/forms";

import { MainGridComponent } from "./main-grid.component";
import { MainNavComponent } from "../main-nav/main-nav.component";
import { ItemCardComponent } from "../item-card/item-card.component";
import {
  MatGridListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatSnackBarModule
} from "@angular/material";

import { HttpClientModule } from "@angular/common/http";

import { NgxPaginationModule } from "ngx-pagination";

import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("MainGridComponent", () => {
  let component: MainGridComponent;
  let fixture: ComponentFixture<MainGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatCardModule,
        HttpClientModule,
        FlexLayoutModule,
        NgxPaginationModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [MainGridComponent, MainNavComponent, ItemCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
