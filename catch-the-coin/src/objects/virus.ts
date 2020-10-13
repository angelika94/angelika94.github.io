import { Game } from "../game.js";
import { Fallingobject } from "./fallingobject.js";

export class Virus extends Fallingobject {
  constructor() { super('virus'); }

  onCatch() {
    Game.end();
  }

  onMiss() {

  }
}