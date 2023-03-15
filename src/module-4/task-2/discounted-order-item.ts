import { OrderItem } from "./order-item";
import { Product } from "./product";

export class DiscountedOrderItem extends OrderItem {
  public get discount(): number {
    return this._discount;
  }

  private _discount: number;

  constructor(product: Product, quantity: number, discount: number) {
    super(product, quantity);
    this._discount = discount;
  }

  public getCost(): number {
    const totalCost = this.product.price * this.quantity;
    return totalCost - this._discount;
  }
}