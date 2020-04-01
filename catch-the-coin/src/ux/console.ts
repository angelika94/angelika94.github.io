import { Game } from '../game.js'

interface IButtons {
  start: HTMLButtonElement
  reset: HTMLButtonElement
}

export class Console {

  static buttons: IButtons = {
    start: null,
    reset: null
  };

  static init() {

    Console.buttons.start = <HTMLButtonElement>document.querySelector("#start");
    Console.buttons.reset = <HTMLButtonElement>document.querySelector("#reset");

    Console.buttons.start.onclick = () => { Game.start() };
    Console.buttons.reset.onclick = () => { Game.start() };
  }
}