import { Control } from "./control";

export class Rotate extends Control {
  constructor() {
    super('rotate');
  }

  public makeAction(): void {
    this._shape.rotate();
    super.makeAction();
  }
}