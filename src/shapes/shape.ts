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

  public rotate(): void {
    this._setNextRotationAngle();
    
    switch(this._currentRotateAngle) {
      case 0:
        this._setOffsets0();
        break;
      case 90:
        this._setOffsets90();
        break;
      case 180:
        this._setOffsets180();
        break;
      case 270:
        this._setOffsets270();
        break;
    }
  }

  protected _setInitialShape(): void {
    this._setRotationCenter();
    this._setOffsets0();
    this._setShapeColor();
  }

  protected _createCells(numberOfCells: number): void {
    for (let cellNumber = 0; cellNumber < numberOfCells; cellNumber++) {
      this._shapeCells.push(new ShapeCell());
    }
  }

  protected abstract _setRotationCenter(): void;
  protected abstract _setShapeColor(): void;

  protected abstract _setOffsets0(): void;
  protected abstract _setOffsets90(): void;
  protected abstract _setOffsets180(): void;
  protected abstract _setOffsets270(): void;

  protected _setNextRotationAngle(): void {
    if (this._currentRotateAngle === 270) {
      this._currentRotateAngle = 0;
    } else {
      this._currentRotateAngle += 90;
    }
  }
}

// class Tshape extends Shape {

// }

// class Lshape extends Shape {

// }

// class Skew extends Shape {

// }