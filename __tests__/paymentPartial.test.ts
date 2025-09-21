import { PaymentGateway } from "../src/paymentGateway";
import { PaymentService } from "../src/paymentService";

describe("PaymentService with partial mock", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should use real connect but mock charge", () => {
    // 👇 only mock `charge`, keep `connect` real
    const chargeSpy = jest
      .spyOn(PaymentGateway.prototype, "charge")
      .mockImplementation(() => "mock charge");

    const service = new PaymentService();
    const result = service.pay(50);

    // real connect is still called
    expect(result).toBe("mock charge");
    expect(chargeSpy).toHaveBeenCalledWith(50);

    chargeSpy.mockRestore(); // cleanup
  });
});
