import { Product } from "./product";

export abstract class OrderItem {
  private _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  public get product(): Product {
    return this._product;
  }

  public set product(product: Product) {
    this._product = product;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }

  public log(): void {
    console.log(`Product: ${this._product.name}; Quantity: ${this._quantity}`);
  }

  public abstract getCost(): number;

  public compare(other: OrderItem): number {
    if (this.getCost() < other.getCost()) {
      return 1;
    } else if (this.getCost() > other.getCost()) {
      return -1;
    } else {
      return 0;
    }
  }
}
