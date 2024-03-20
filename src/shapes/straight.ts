import { Shape } from "./shape";
import { ShapeCell } from "./shape-cell";
import { ShapeColor } from "./shape-types";

export class Straight extends Shape {
  constructor() {
    super();
  }

  /**
   * Rotate center is the second cell:
   * o
   * x
   * o
   * o
   */
  protected _setRotationCenter(): void {
    const numberOfCellsInStraight = 4;
    this._createCells(numberOfCellsInStraight);

    const rotationCellIndex = 0;
    this._shapeCells[rotationCellIndex].rotateCenter = true;
    this._shapeCells[rotationCellIndex].x = 5;
    this._shapeCells[rotationCellIndex].y = 1;
  }

  /**
   * Sets offesets for vertical straight:
   * o
   * x
   * o
   * o
   */
  protected _setOffsets0(): void {
    const upperCellIndex = 1;
    this._shapeCells[upperCellIndex].offsetX = 0;
    this._shapeCells[upperCellIndex].offsetY = -1;

    const lowerCell1Index = 2;
    this._shapeCells[lowerCell1Index].offsetX = 0;
    this._shapeCells[lowerCell1Index].offsetY = 1;

    const lowerCell2Index = 3;
    this._shapeCells[lowerCell2Index].offsetX = 0;
    this._shapeCells[lowerCell2Index].offsetY = 2;
  }

  /**
   * Sets offesets for horizontal straight:
   * o x o o
   */
  protected _setOffsets90(): void {
    const leftCellIndex = 1;
    this._shapeCells[leftCellIndex].offsetX = -1;
    this._shapeCells[leftCellIndex].offsetY = 0;

    const rightCell1Index = 2;
    this._shapeCells[rightCell1Index].offsetX = 1;
    this._shapeCells[rightCell1Index].offsetY = 0;

    const rightCell2Index = 3;
    this._shapeCells[rightCell2Index].offsetX = 2;
    this._shapeCells[rightCell2Index].offsetY = 0;
  }

  protected _setOffsets180(): void {
    this._setOffsets0();
  }

  protected _setOffsets270(): void {
    this._setOffsets90();
  }

  protected _setShapeColor(): void {
    this._shapeCells = this._shapeCells.map((cell) => {
      cell.color = ShapeColor.Cyan;
      return cell;
    });
  }
}