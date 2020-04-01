import { Game } from "../game.js";
export class Board {
    static placeObject(object, position) {
        object.style.left = `${position.X}px`;
        Board.game.appendChild(object);
    }
    static placeAtRandom(object) {
        let position = Board.generateRandomPosition();
        Board.placeObject(object, position);
        return object;
    }
    static generateRandomPosition() {
        return { X: Math.floor(Math.random() * Board.width) };
    }
    static clean() {
        document.querySelectorAll('.airdrop').forEach(function (a) {
            a.remove();
        });
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
Board.game = document.querySelector('#game');
Board.scoreElement = document.querySelector('.score');
Board.welcomeElement = document.querySelector('.welcome-screen');
Board.finalElement = document.querySelector('.final-screen');
Board.finalResultElement = document.querySelector('.final-result');
Board.width = Board.game.offsetWidth;
Board.height = Board.game.offsetHeight;
