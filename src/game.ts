import { Board } from "./board";
import { Controls } from "./controls";
import { HTMLBoardRenderer } from "./renderers/html-board-renderer";
import { Straight } from "./shapes";
import { Square } from "./shapes/square";

// class Tick { }

export class Game {
  private _board = new Board();
  private _boardRenderer = new HTMLBoardRenderer();
  private _controls = new Controls();

  constructor() {
    this._setupGlobalEvents();

    this._board.currentShape = new Straight();
    this._controls.setNewShape(this._board.currentShape);
  }

  public renderBoard(): void {
    this._board.makeEmptyBoard();
    this._board.resetCurrentShapeCoordinates();
    this._boardRenderer.render(this._board);
  }

  public start(): void {

  }

  private _setupGlobalEvents(): void {
    document.addEventListener('rerenderBoard', this.renderBoard.bind(this));
  }
}