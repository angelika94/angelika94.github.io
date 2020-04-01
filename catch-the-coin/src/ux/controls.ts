import { Player } from "../objects/index.js";
import { Game } from "../game.js";

export class Controls {
  static mouse_x: number;

  static onmousemove = (ev: MouseEvent) => {
    Controls.mouse_x = ev.clientX;
    if (Game.isRunning === true) {
      Player.move(Controls.mouse_x);
    }
  };
}