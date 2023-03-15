import { OrderItem } from "./order-item";
import { Product } from "./product";

export class TransportedOrderItem extends OrderItem {
  private _transportCost: number;

  constructor(product: Product, quantity: number, transportCost: number) {
    super(product, quantity);
    this._transportCost = transportCost;
  }

  public getCost(): number {
    return this.product.price * this.quantity + this._transportCost;
  }
}
