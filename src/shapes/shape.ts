import { ShapeCell } from "./shape-cell";

export abstract class Shape {
  protected _shapeCells: ShapeCell[] = [];
  protected _currentRotateAngle = 0;

  constructor() {
    this._setInitialShape();
  }

  public getCalculatedCells(): ShapeCell[] {
    const rotateCenter = this._shapeCells[0];

    const calculatedCells = this._shapeCells.map((cell: ShapeCell) => {
      const resultCell = new ShapeCell();

      if (cell.rotateCenter) {
        resultCell.x = cell.x;
        resultCell.y = cell.y;
      } else {
        resultCell.x = rotateCenter.x + cell.offsetX;
        resultCell.y = rotateCenter.y + cell.offsetY;
      }
      resultCell.color = cell.color;

      return resultCell;
    });

    return calculatedCells;
  }

  // public abstract moveLeft(): void;
  // public abstract moveRight(): void;
  // public abstract moveDown(): void;

  public abstract rotate(angle: number): void;

  protected _setInitialShape(): void {
    this._setRotateCenter();
    this._setOffsets0();
    this._setShapeColor();
  }
  protected abstract _setRotateCenter(): void;
  protected abstract _setShapeColor(): void;

  protected abstract _setOffsets0(): void;
  // protected abstract _setOffsets90(): void;
  // protected abstract _setOffsets180(): void;
  // protected abstract _setOffsets270(): void;
}

// class Tshape extends Shape {

// }

// class Lshape extends Shape {

// }

// class Skew extends Shape {

// }