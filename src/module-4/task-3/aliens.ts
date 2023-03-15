import { Human, CanFly, CanRun, CanSwim } from "./human";

class Nibiruan extends Human implements CanRun, CanFly {
  run(): void {
    console.log("I can run very fast!");
  }

  swim(): void {
    console.log("I have never learned how to swim");
  }

  fly(): void {
    console.log("I can fly because of my wings");
  }
}

class Earthling extends Human implements CanRun, CanSwim {
  run(): void {
    console.log("I can run pretty fast!");
  }

  swim(): void {
    console.log("I can swim without any problem");
  }

  fly(): void {
    console.log("I cannot fly, unfortunately");
  }
}

class Kryptonian extends Human implements CanFly {
  run(): void {
    console.log("I can run because I have legs");
  }

  swim(): void {
    console.log("I can swim, but it's not my strong suit");
  }

  fly(): void {
    console.log("I can fly, it's my main ability");
  }
}
