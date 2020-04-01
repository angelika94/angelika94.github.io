import { Game } from '../game.js';
export class Console {
    static init() {
        Console.buttons.start = document.querySelector("#start");
        Console.buttons.reset = document.querySelector("#reset");
        Console.buttons.start.onclick = () => { Game.start(); };
        Console.buttons.reset.onclick = () => { Game.start(); };
    }
}
Console.buttons = {
    start: null,
    reset: null
};
