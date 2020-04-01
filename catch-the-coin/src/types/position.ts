export class Position {

  X: number;
  Y?: number = 0;

  constructor(x: number, y: number) {

    this.X = x;
    this.Y = y;
  }

  static copy(position: Position) {

    return new Position(position.X, position.Y);
  }
}