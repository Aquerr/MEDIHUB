import { TestBed } from "@angular/core/testing";

import { MedihubHttpInterceptor } from "./medihub-http.interceptor";

describe("AuthInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [MedihubHttpInterceptor]
    })
  );

  it("should be created", () => {
    const interceptor: MedihubHttpInterceptor = TestBed.inject(MedihubHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
