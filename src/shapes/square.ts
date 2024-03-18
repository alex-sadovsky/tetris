import { Shape } from "./shape";
import { ShapeCell } from "./shape-cell";
import { ShapeColor } from "./shape-types";

export class Square extends Shape {
  constructor() {
    super();
  }

  public rotate(angle: number): void {
    angle;
  }

  protected _setRotateCenter(): void {
    const rotateCenterUpperLeft = new ShapeCell();
    rotateCenterUpperLeft.rotateCenter = true;
    rotateCenterUpperLeft.x = 4;
    rotateCenterUpperLeft.y = 0;
    this._shapeCells.push(rotateCenterUpperLeft);
  }

  protected _setOffsets0(): void {
    const upperRightCell = new ShapeCell();
    upperRightCell.offsetX = 1;
    upperRightCell.offsetY = 0;
    this._shapeCells.push(upperRightCell);

    const lowerLeftCell = new ShapeCell();
    lowerLeftCell.offsetX = 0;
    lowerLeftCell.offsetY = 1;
    this._shapeCells.push(lowerLeftCell);

    const lowerRightCell = new ShapeCell();
    lowerRightCell.offsetX = 1;
    lowerRightCell.offsetY = 1;
    this._shapeCells.push(lowerRightCell);
  }

  protected _setShapeColor(): void {
    this._shapeCells = this._shapeCells.map((cell) => {
      cell.color = ShapeColor.Yellow;
      return cell;
    });
  }
}