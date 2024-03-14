import { ShapeCell } from "./shape-cell";

export abstract class Shape {
  protected _shapeCells: ShapeCell[] = [];
  protected _currentRotateAngle = 0;

  constructor() {
    this._setInitialShape();
  }

  public abstract getCalculatedCells(): ShapeCell[];

  // public abstract moveLeft(): void;
  // public abstract moveRight(): void;
  // public abstract moveDown(): void;

  public abstract rotate(angle: number): void;

  protected abstract _setInitialShape(): void;
  protected abstract _setRotateCenter(): void;
  protected abstract _setShapeColor(): void;

  protected abstract _setOffsets0(): void;
  // protected abstract _setOffsets90(): void;
  // protected abstract _setOffsets180(): void;
  // protected abstract _setOffsets270(): void;
}

// class Square extends Shape {

// }

// class Tshape extends Shape {

// }

// class Lshape extends Shape {

// }

// class Skew extends Shape {

// }