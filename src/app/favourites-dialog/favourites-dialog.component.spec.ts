import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FavouritesDialogComponent } from "./favourites-dialog.component";

describe("LoginDialogComponent", () => {
  let component: FavouritesDialogComponent;
  let fixture: ComponentFixture<FavouritesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
