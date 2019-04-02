import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemCardComponent } from "./item-card.component";

import { MatSnackBarModule, MatCardModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ItemCardComponent", () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        MatCardModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      declarations: [ItemCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display 'added' message if item.favourite equals false", () => {
    component.item.favourite = false;
    component.setFavourite();
    expect(component.message).toContain("added");
  });

  it("should display 'removed' message if item.favourite equals true", () => {
    component.item.favourite = true;
    component.setFavourite();
    expect(component.message).toContain("removed");
  });
});
