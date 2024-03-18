import { Shape } from "./shape";
import { ShapeCell } from "./shape-cell";
import { ShapeColor } from "./shape-types";

export class Straight extends Shape {
  constructor() {
    super();
  }

  public rotate(angle: number): void {
    console.log(angle);
  }

  protected _setRotateCenter(): void {
    const rotateCenter = new ShapeCell();
    rotateCenter.rotateCenter = true;
    rotateCenter.x = 5;
    rotateCenter.y = 1;
    this._shapeCells.push(rotateCenter);
  }

  protected _setOffsets0(): void {
    const upperCell = new ShapeCell();
    upperCell.offsetX = 0;
    upperCell.offsetY = -1;
    this._shapeCells.push(upperCell);

    const lowerCell1 = new ShapeCell();
    lowerCell1.offsetX = 0;
    lowerCell1.offsetY = 1;
    this._shapeCells.push(lowerCell1);

    const lowerCell2 = new ShapeCell();
    lowerCell2.offsetX = 0;
    lowerCell2.offsetY = 2;
    this._shapeCells.push(lowerCell2);
  }

  protected _setShapeColor(): void {
    this._shapeCells = this._shapeCells.map((cell) => {
      cell.color = ShapeColor.Cyan;
      return cell;
    });
  }
}