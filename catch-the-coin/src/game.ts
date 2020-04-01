import { Coin, Virus, Player } from './objects/index.js'
import { Console, Controls, Board } from './ux/index.js'
import { Timer } from './types/index.js'

enum FallingFrequency { COINS = 1000, VIRUS = 5000 }

export class Game {
  static clockCoins: Timer;
  static clockViruses: Timer;
  static score: number = 0;
  static player: Player;
  static isRunning: boolean = false;
  static body: HTMLBodyElement ;

  static init() {
    Game.body = document.querySelector('body');
    Game.body.onmousemove = Controls.onmousemove;

    Game.ready()
  }

  static ready() {
    Console.init();
    Player.init();
    Game.clockCoins = new Timer(FallingFrequency.COINS, Game.generate_coin);
    Game.clockViruses = new Timer(FallingFrequency.VIRUS, Game.generate_virus);
  }

  static start() {
    if (Game.isRunning) { return }

    Game.isRunning = true;
    Game.clockCoins.start();
    Game.clockViruses.start();
    Game.score = 0;
    Board.hideWelcome();
    Board.hideFinalScreen();
    Board.showScore();
  }

  static end() {
    Game.clockCoins && Game.clockCoins.stop();
    Game.clockViruses && Game.clockViruses.stop();
    Game.isRunning = false;

    Board.showFinalScreen();
    Board.clean();
  }

  static generate_virus() {
    Board.placeAtRandom(new Virus().element);
  }

  static generate_coin() {
    Board.placeAtRandom(new Coin().element);
  }

  static increaseScore() {
    if (Game.isRunning === true) {
      Game.score++;
      Board.showScore();
    }
  }
}

Game.init();