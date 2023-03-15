export interface CanRun {
  run(): void;
}

export interface CanSwim {
  swim(): void;
}

export interface CanFly {
  fly(): void;
}

export abstract class Human implements CanRun, CanSwim, CanFly {
  public run(): void {
  }

  public swim(): void {
  }
  
  public fly(): void {
  }
}
