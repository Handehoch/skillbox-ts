export class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public log(): void {
    console.log(`Name: ${this._name}; Price: ${this._price}`);
  }
}
