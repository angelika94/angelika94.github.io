import { Board } from "../ux/board.js";
import { Player } from "./index.js";
import { positionToInteger } from "../helpers/index.js";
import { Game } from "../game.js";

export class Fallingobject {
  element: HTMLDivElement;
  itemPositionY: number;

  constructor(name) {
    this.element = document.createElement('div');
    this.element.className = name + ' airdrop';
    this.itemPositionY = 0;

    this.moveItem();
  }

  moveItem() {
    this.element.style.top = `${this.itemPositionY}px`;

    if (Game.isRunning === true) {
      if (this.itemPositionY <= Board.height) {
        if (this.checkCatch()) {
          this.onCatch();
        } else {
          this.itemPositionY += 2;
          window.requestAnimationFrame(() => {
            this.moveItem();
          })
        }
      } else {
        this.onMiss();
        this.element.remove();
      }
    }
  }

  checkCatch() {
    const CHECK_ZONE = { top: Board.height - Player.height, bottom: Board.height};

    if (this.itemPositionY > CHECK_ZONE.top && this.itemPositionY < CHECK_ZONE.bottom) {
      const playerLeftEdge = Player.getPosition().left;
      const playerRightEdge = playerLeftEdge + Player.width;

      const airdropLeftEdge = positionToInteger(this.element.style.left);
      const airdropRightEdge = airdropLeftEdge + 20;

      if(airdropLeftEdge < playerRightEdge && airdropRightEdge > playerLeftEdge){
        return true;
      }
    }
  }

  onCatch() {
  }

  onMiss() {

  }
}


