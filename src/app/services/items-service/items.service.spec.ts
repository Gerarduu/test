import { TestBed, inject } from "@angular/core/testing";

import { ItemsService } from "./items.service";
import { HttpClientModule } from "@angular/common/http";

describe("ItemsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItemsService]
    });
  });

  it("should be created", inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
