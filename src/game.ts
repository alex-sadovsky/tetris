import { Board } from "./board";
import { HTMLBoardRenderer } from "./renderers/html-board-renderer";
import { Straight } from "./shapes";

// class Tick { }

export class Game {
  private _board = new Board();
  private _boardRenderer = new HTMLBoardRenderer();

  constructor() {
    this._board.currentShape = new Straight();
  }

  public renderBoard(): void {
    this._board.resetCurrentShapeCoordinates();
    this._boardRenderer.render(this._board);
  }

  public start(): void {

  }
}