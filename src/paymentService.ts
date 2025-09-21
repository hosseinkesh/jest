// src/PaymentService.ts
import { PaymentGateway } from "./paymentGateway";

export class PaymentService {
  private gateway: PaymentGateway;

  constructor() {
    this.gateway = new PaymentGateway();
  }

  pay(amount: number) {
    this.gateway.connect();
    return this.gateway.charge(amount);
  }
}
