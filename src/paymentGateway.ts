// src/PaymentGateway.ts
export class PaymentGateway {
  connect() {
    return "connected to payment gateway";
  }

  charge(amount: number) {
    return `charged $${amount}`;
  }
}
