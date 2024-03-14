import { ShapeColor } from './shape-types';

export class ShapeCell {
  protected _x = 0;
  protected _y = 0;
  protected _offsetX = 0;
  protected _offsetY = 0;
  protected _color: ShapeColor = ShapeColor.Transparent;
  protected _rotateCenter = false;

  set offsetX(offset) {
    this._offsetX = offset;
  }

  get offsetX(): number {
    return this._offsetX;
  }

  set offsetY(offset) {
    this._offsetY = offset;
  }

  get offsetY(): number {
    return this._offsetY;
  }

  set x(x) {
    this._x = x;
  }

  get x(): number {
    return this._x;
  }

  set y(y) {
    this._y = y;
  }

  get y(): number {
    return this._y;
  }

  set color(color: ShapeColor) {
    this._color = color;
  }

  get color(): ShapeColor {
    return this._color;
  }

  set rotateCenter(isRotateCenter: boolean) {
    this._rotateCenter = isRotateCenter;
  }

  get rotateCenter(): boolean {
    return this._rotateCenter;
  }
}