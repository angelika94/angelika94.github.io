import { Position } from '../types/position.js'
import { Game } from "../game.js";

export class Board {
  static game: HTMLBodyElement = document.querySelector('#game');
  static scoreElement: HTMLBodyElement = document.querySelector('.score');
  static welcomeElement: HTMLBodyElement = document.querySelector('.welcome-screen');
  static finalElement: HTMLBodyElement = document.querySelector('.final-screen');
  static finalResultElement: HTMLBodyElement = document.querySelector('.final-result');

  static width: number = Board.game.offsetWidth;
  static height: number = Board.game.offsetHeight;

  public static placeObject(object: HTMLDivElement, position: Position) {
    object.style.left = `${position.X}px`;
    Board.game.appendChild(object);
  }

  public static placeAtRandom(object: HTMLDivElement) {

    let position = Board.generateRandomPosition();
    Board.placeObject(object, position);

    return object
  }

  public static generateRandomPosition() {
    return { X: Math.floor(Math.random() * Board.width) };
  }

  static clean() {
    document.querySelectorAll('.airdrop').forEach(function(a){
      a.remove()
    })
  }

  static showWelcome() {
    Board.welcomeElement.style.display = 'flex';
  }

  static hideWelcome() {
    Board.welcomeElement.style.display = 'none';
  }

  static showFinalScreen() {
    Board.finalElement.style.display = 'flex';
  }

  static hideFinalScreen() {
    Board.finalElement.style.display = 'none';
  }

  static showScore() {
    Board.scoreElement.innerText = `Score: ${Game.score}`;
    Board.finalResultElement.innerText = `Score: ${Game.score}`;
  }
}