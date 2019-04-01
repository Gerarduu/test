import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MainNavComponent } from "./main-nav.component";
import { FavouritesDialogComponent } from "../favourites-dialog/favourites-dialog.component";

import { FormsModule } from "@angular/forms";

import {
  MatIconModule,
  MatDialogModule,
  MatBadgeModule,
  MatToolbarModule,
  MatFormFieldModule
} from "@angular/material";

import { HttpClientModule } from "@angular/common/http";

describe("MainNavComponent", () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        MatBadgeModule,
        MatToolbarModule,
        MatFormFieldModule,
        HttpClientModule
      ],
      declarations: [MainNavComponent, FavouritesDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
