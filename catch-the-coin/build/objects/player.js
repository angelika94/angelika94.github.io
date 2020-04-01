import { positionToInteger } from "../helpers/index.js";
export class Player {
    static init() {
        Player.html_element = document.querySelector("#panda");
        Player.width = Player.html_element.offsetWidth;
        Player.height = Player.html_element.offsetHeight;
    }
    static getPosition() {
        return {
            left: positionToInteger(Player.html_element.style.left),
        };
    }
    static move(mouse_x) {
        Player.updateCSS(mouse_x);
    }
    static updateCSS(mouse_x) {
        Player.html_element.style.left = `${mouse_x}px`;
    }
}
