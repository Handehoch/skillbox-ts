import { DiscountedOrderItem } from "./discounted-order-item";
import { Product } from "./product";

export class QuantityDiscountedOrderItem extends DiscountedOrderItem {
  private _requiredQuantity: number;

  constructor(product: Product, quantity: number, discount: number, requiredQuantity: number) {
    super(product, quantity, discount);
    this._requiredQuantity = requiredQuantity;
  }

  public getCost(): number {
    if (this.quantity >= this._requiredQuantity) {
      const totalCost = this.product.price * this.quantity;
      return totalCost - this.discount;
    } else {
      return this.product.price * this.quantity;
    }
  }
}
