import { Board } from "../board";
import { ShapeColor } from "../shapes/shape-types";

class CssResolverService {
  get baseCellClass(): string {
    return 'cell';
  }

  public getColorClassForCode(colorCode = ShapeColor.Transparent): string {
    switch(colorCode) {
      case ShapeColor.Cyan:
        return 'cell-cyan';
      case ShapeColor.Yellow:
        return 'cell-yellow';
      case ShapeColor.Purple:
        return 'cell-purple';
      case ShapeColor.Orange:
        return 'cell-orange';
      case ShapeColor.Green:
        return 'cell-green';
      case ShapeColor.Transparent:
      default:
        return 'cell-transparent';
    }
  }
}

export class HTMLBoardRenderer {
  private _boardBlockId = '';
  private _boardElement: HTMLElement;
  private _cssResolver = new CssResolverService();

  constructor(boardBlockId: string = 'tetris') {
    this._boardBlockId = boardBlockId;
    this._boardElement = document.getElementById(this._boardBlockId) as HTMLElement;
  }

  public render(board: Board): void {
    for(let rowNum = 0; rowNum < board.rows; rowNum++) {
      for(let colNum = 0; colNum < board.cols; colNum++) {
        const cell = document.createElement('div');
        this._resolveCssForCell(cell, board.currentBoard[rowNum][colNum]);
        this._boardElement.appendChild(cell);
      }
    }
  }

  private _resolveCssForCell(cellEl: HTMLElement, colorCode = ShapeColor.Transparent): void {
    cellEl.classList.add(this._cssResolver.baseCellClass);
    cellEl.classList.add(this._cssResolver.getColorClassForCode(colorCode));
  }
}