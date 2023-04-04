class MyArray<T> {
  public get elements(): T[] {
    return this._elements;
  }

  private set elements(elements: T[]) {
    this._elements = elements;
  }

  private _elements: T[] = [];

  constructor (elements: T[] = []) {
    this._elements = elements;
  }

  add(element: T): void {
    this.elements.push(element);
  }

  removeAt(index: number): void {
    if (index >= 0 && index < this.elements.length) {
      this.elements = [...this.elements.slice(0, index), ...this.elements.slice(index + 1)];
    } else {
      throw new Error(`Index ${index} is out of range`);
    }
  }

  public clear(): void {
    this.elements = [];
  }

  public areElementsEqual(index1: number, index2: number): boolean {
    const element1 = this.elements[index1];
    const element2 = this.elements[index2];

    if (typeof element1 === 'object' && element1 !== null && typeof element2 === 'object' && element2 !== null) {
      return JSON.stringify(element1) === JSON.stringify(element2);
    }

    return element1 === element2;
  }

  public flatten(): MyArray<T> {
    const flatArray: T[] = [];

    function flat(elements: T[]): void {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (Array.isArray(element)) {
          flat(element);
        } else {
          flatArray.push(element);
        }
      }
    }

    flat(this.elements);
    return new MyArray<T>(flatArray);
  }
}