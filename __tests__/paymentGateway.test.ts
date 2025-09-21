jest.mock("../src/paymentGateway");

import { PaymentGateway } from "../src/paymentGateway";
import { PaymentService } from "../src/paymentService";

describe("PaymentGateway", () => {
  let mockConnect: jest.Mock;
  let mockCharge: jest.Mock;

  beforeEach(() => {
    mockConnect = jest.fn(() => "mock connected");
    mockCharge = jest.fn((amount: number) => "mock charge");

    (PaymentGateway as jest.Mock).mockImplementation(() => {
      return {
        connect: mockConnect,
        charge: mockCharge,
      };
    });
  });

  it("should call connect once", () => {
    const paymentService = new PaymentService();
    const result = paymentService.pay(10);
    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(mockCharge).toHaveBeenCalledTimes(1);
    expect(mockCharge).toHaveBeenCalledWith(10);
    expect(result).toEqual("mock charge");
  });

  it("should throw when pay fails", () => {
    mockCharge.mockImplementation(() => {
      throw new Error("payment failed");
    });
    const paymentService = new PaymentService();
    expect(() => paymentService.pay(14)).toThrow("payment failed");
    expect(mockCharge).toHaveBeenCalledWith(14);
    expect(mockConnect).toHaveBeenCalledTimes(1);
  });
});
