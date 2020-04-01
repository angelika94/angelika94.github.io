import { Game } from "../game.js";
import { Fallingobject } from "./fallingobject.js";

export class Coin extends Fallingobject {
  constructor() { super('coin'); }

  onCatch() {
    this.element.remove();
    Game.increaseScore();
  }

   onMiss() {
     Game.end();
  }
}