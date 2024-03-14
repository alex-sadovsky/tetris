import { Shape } from "./shapes/shape";
import { ShapeCell } from "./shapes/shape-cell";

export class Board {
  private _widthCols = 10;
  private _heightRows = 21;
  private _currentShape: Shape;
  private _currentBoard: number[][] = [];
  // #filledCells: number[] = [];

  constructor() {
    this._makeEmptyBoard();
  }

  get currentBoard(): number[][] {
    return this._currentBoard;
  }

  get rows(): number {
    return this._heightRows;
  }

  get cols(): number {
    return this._widthCols;
  }

  set currentShape(shape: Shape) {
    this._currentShape = shape;
  }

  get currentShape(): Shape {
    return this._currentShape;
  }

  public resetCurrentShapeCoordinates(): void {
    this._currentShape.getCalculatedCells().forEach((cell: ShapeCell) => {
      this._currentBoard[cell.y][cell.x] = cell.color;
    });
  }

  private _makeEmptyBoard(): void {
    for(let rowNum = 0; rowNum < this._heightRows; rowNum++) {
      this._currentBoard[rowNum] = [];
      for(let colNum = 0; colNum < this._widthCols; colNum++) {
        this._currentBoard[rowNum][colNum] = 0;
      }
    }
  }
}