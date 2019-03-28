import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainGridComponent } from "./main-grid.component";

describe("MainGridComponent", () => {
  let component: MainGridComponent;
  let fixture: ComponentFixture<MainGridComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
